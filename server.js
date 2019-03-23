const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')
const sgMail = require('@sendgrid/mail');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
    .then(() => {
        const server = express()

        server.use(bodyParser.json())

        server.get('/p/:id', (req, res) => {
            const actualPage = '/product'
            const queryParams = { title: req.params.id }
            app.render(req, res, actualPage, queryParams)
        })

        server.post('/api/address', (req, res) => {
            const { name, street, zipcode, city, email } = req.body.userInfo

            const orderHTML = req.body.order.map(({ title, images, price, quantity }) => {
                return `
                    <div style="border: 1px dotted black; padding 10px;">
                        <h4>${title}</h4>
                        <p>
                            ${quantity}st ${price}kr
                        </p>
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
                `,
            };
            sgMail.send(msg);

            res.send('success')
        })

        server.get('*', (req, res) => {
            return handle(req, res)
        })

        server.listen(3000, (err) => {
            if (err) throw err
            console.log('> Ready on http://localhost:3000')
        })
    })
    .catch((ex) => {
        console.error(ex.stack)
        process.exit(1)
    })


