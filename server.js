const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')
const sgMail = require('@sendgrid/mail');

const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 3000

const app = next({ dev })
const handle = app.getRequestHandler()


const redirects = [
    { from: '/p/halsband-silver-kvinnosymbol', to: '/product/halsband-silver-kvinnosymbol-m' },
    { from: '/product/halsband-silver-kvinnosymbol', to: '/product/halsband-silver-kvinnosymbol-s' },
    { from: '/p/halsband-silver-kvinnosymbol-xl', to: '/product/halsband-silver-kvinnosymbol-xl' },
    { from: '/p/halsband-silver-svala', to: '/product/halsband-silver-svala' },
    { from: '/products/arkipelag/örhängen', to: '/'},
    { from: '/p/armband-silver-kvinnosymbol', to: '/product/armband-silver-kvinnosymbol'},
    { from: '/p/*', to: '/' },
]

app.prepare()
    .then(() => {
        const server = express()

        server.use(bodyParser.json())

        redirects.forEach(({ from, to, type = 301, method = 'get' }) => {
            server[method](from, (req, res) => {
              res.redirect(type, to)
            })
        })

        server.get('/product/:id', (req, res) => {
            const actualPage = '/product'
            const queryParams = { title: req.params.id }
            app.render(req, res, actualPage, queryParams)
        })

        server.post('/api/address', (req, res) => {
            const { name, street, zipcode, city, email, message } = req.body.userInfo

            const orderHTML = req.body.order.map(({ title, images, price, quantity, variant }) => {
                return `
                    <div style="border-bottom:1px solid grey; width:300px;">
                        <h4>${title}, ${variant}</h4>
                        <h4>
                            ${quantity}st ${price}kr
                        </h4>
                        <div>
                            <img width="100" src="${images[0]}"/>
                        </div>
                    </div>
                `;
            })

            sgMail.setApiKey(process.env.SENDGRID_API_KEY);
            const msg = {
                to: 'bellpepperstore@gmail.com',
                from: email,
                subject: name,
                text: street,
                html: `
                    <h3>Ny beställning från:</h3>
                    <br />
                    <strong>${name}</strong>
                    <br />
                    <strong>${street}</strong>
                    <br />
                    <strong>${zipcode}</strong> <strong>${city}</strong>
                    <br />
                    <strong>${email}</strong>
                    <br />
                    <br />
                    <h3>Order:</h3>
                    <br />
                    ${orderHTML}
                    <br />
                    <h4>Totalt: ${req.body.priceTotal}kr</h4>
                    <strong>Meddelande: ${req.body.message}</strong>
                `
            };
            sgMail.send(msg);

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


