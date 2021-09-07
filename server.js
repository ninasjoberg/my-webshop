const express = require('express')
const next = require('next')
const sgMail = require('@sendgrid/mail')

const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 3000
const app = next({ dev })
const handle = app.getRequestHandler()

const redirects = [
    {
        from: '/p/halsband-silver-kvinnosymbol',
        to: '/product/halsband-silver-kvinnosymbol-m',
    },
    {
        from: '/product/halsband-silver-kvinnosymbol',
        to: '/product/halsband-silver-kvinnosymbol-s',
    },
    {
        from: '/p/halsband-silver-kvinnosymbol-xl',
        to: '/product/halsband-silver-kvinnosymbol-xl',
    },
    { from: '/p/halsband-silver-svala', to: '/product/halsband-silver-svala' },
    {
        from: '/p/armband-silver-kvinnosymbol',
        to: '/product/armband-silver-kvinnosymbol',
    },
    { from: '/p/*', to: '/' },
    { from: '/products/*', to: '/' },
    { from: '/shop', to: '/' },
    { from: '/product-care', to: '/info' },
]

app.prepare()
    .then(() => {
        const server = express()
        server.use(express.json())

        redirects.forEach(({ from, to, type = 301, method = 'get' }) => {
            server[method](from, (req, res) => {
                res.redirect(type, to)
            })
        })

        server.post('/api/address', (req, res) => {
            const { name, street, zipcode, city, email } = req.body.userInfo

            const orderHTML = req.body.order
                .map(({ title, images, price, quantity, variant, size }) => {
                    return `
                    <table style="margin-bottom: 20px; width: 100%">
                        <tr>
                            <td style="width: 25%; padding-right: 4%;">
                                <img width="100%" src="${images[0]}" >
                            </td>
                            <td>
                                <table style="width:100%;">
                                    <tr>
                                        <td><strong>Produkt</td>
                                        <td style="text-align:end;">${title}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Variant</td>
                                        <td style="text-align:end;">${
                                            variant || '-'
                                        }</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Storlek</td>
                                        <td style="text-align:end;">${
                                            size || '-'
                                        }</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Antal</strong></td>
                                        <td style="text-align:end;">
                                            <strong>${quantity} st</strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><strong>Pris</strong></td>
                                        <td style="text-align:end;">${price} kr/st</td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                `
                })
                .join('')

            sgMail.setApiKey(process.env.SENDGRID_API_KEY)
            const msg = {
                to: 'bellpepperstore@gmail.com',
                from: email,
                subject: name,
                text: street,
                html: `
                <div style="margin: 8%; max-width: 600px;">
                    <h2>Ny beställning från:</h2>
                    <div>
                        <br />
                        <strong>${name}</strong>
                        <br />
                        <strong>${street}</strong>
                        <br />
                        <strong>${zipcode}</strong> <strong>${city}</strong>
                        <br />
                        <strong>${email}</strong>
                    </div>
                    <br />
                    <h2>Order:</h2>
                    <div style="background:#f7f7f7; padding: 4%;">
                        ${orderHTML}
                        <h4 style="margin-bottom: 0px; text-align: end">Totalt: ${req.body.priceTotal} kr</h4>
                    </div>
                    <br />
                    <table>
                        <tr>
                            <th style="vertical-align: top;">Meddelande:</th>
                            <td>${req.body.message}</td>
                        </tr>
                    </table>
                </div>
                `,
            }
            sgMail.send(msg)

            res.send('success')
        })

        server.get('*', (req, res) => {
            return handle(req, res)
        })

        server.listen(port, (err) => {
            if (err) throw err
            console.log(`> Ready on http://localhost:${port}`)
        })
    })
    .catch((ex) => {
        console.error(ex.stack)
        process.exit(1)
    })
