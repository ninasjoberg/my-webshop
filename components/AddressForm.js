import React from 'react';
import styled from 'styled-components'


const Wrapper = styled.div`

`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    label {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-top: 10px;
        input {
            height: 40px;
            width: 100%;
            border-radius: 3px;
            border: 1px solid lightgray;
            margin-bottom: 10px;
            padding: 0 10px;
            font-size: 16px;
        }
    }
    p {
        text-align: left;
        margin: 10px 0;
    }
`;

const BuyButton = styled.button`
    width: 200px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-size: 18px;
    letter-spacing: 1px;
    cursor: pointer;
    background-color: black;
    color: white;
    :hover {
        opacity: 0.4;
    }
`;


const AddressForm = ({ name, street, zipcode, city, email, handleChange, handleSubmit }) => {

    console.log('namn', name)
    return (
        <Wrapper>
            <Form
                onSubmit={e => {
                    e.preventDefault()
                    handleSubmit(e)
                  }}>
                <label>
                    Namn:
                    <input type="text" name='name' value={name} onChange={handleChange} placeholder='Förnamn Efternamn' />
                </label>
                <label>
                    Adress:
                    <input type="text" name='street' value={street} onChange={handleChange} placeholder='gatauadress' />
                    <input type="text" name='zipcode' value={zipcode} onChange={handleChange} placeholder='postnummer'/>
                    <input type="text" name='city' value={city} onChange={handleChange} placeholder='stad' />
                </label>
                <label>
                    Mailadress:
                    <input type="text" name='email' value={email} onChange={handleChange} placeholder='mailadress' />
                </label>
                <p>
                    Efter att ordern har skickats till mig så kommer jag kontakta dig med vidare instruktioner för betalning och leverans.
                    Framöver kommer du kunna betala med Stripe, men till dess så betalar du förslagsvis med Swish i samband med att jag bekräftar ordern,
                    exakta instruktioner om betalning och info om leveranstid får du via mail så snart jag behandlat din order.
                </p>
                <BuyButton type="submit" value="Submit">
                    Skicka order
                </BuyButton>
            </Form>
        </Wrapper>
    )
}

export default AddressForm




