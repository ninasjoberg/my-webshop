import React from 'react';
import styled from 'styled-components'
import ActionButton from './ActionButton.js'


const Form = styled.form`
    display: flex;
    flex-direction: column;
    label {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-top: 10px;
        color: #51616a;
        input {
            height: 52px;
            width: 100%;
            border-radius: 3px;
            border: 1px solid lightgray;
            margin-bottom: 10px;
            padding: 0 0 0 10px;
            font-size: 12px;
        }
    }
    p {
        text-align: left;
        margin: 10px 0;
    }
`;

const ErrorInfo = styled.div`
    position: fixed;
    top: 36%;
    left: 50%;
    background-color: white;
    width: 400px;
    height: 100px;
    border: 3px solid orange;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
        color: orange;
        font-size: 24px;
    }
`


const AddressForm = ({ name, street, zipcode, city, email, handleChange, handleSubmit, errorText }) => {
    return (
        <div>
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
                    Betalning sker via Swish efter att ordern bekräftats.
                    Vidare info fås tillsammans med orderbekräftelse.
                </p>
                <ActionButton buttonText="Skicka order" />
                {errorText &&
                    <ErrorInfo>
                        <p>{errorText}</p>
                    </ErrorInfo>
                }
            </Form>
        </div>
    )
}

export default AddressForm




