//Necessary dependencies, data and components.
import React from 'react';
import { Card, Grid } from 'semantic-ui-react'

//Handles pagination and data display.
const displayCard = ({ cards, loading }) => {
    if(loading){
        return <h2>Loading...</h2>
    }

    return(
        <div>
            {cards.map((card, index) => {
                const { Payee, Payment, Remittance } = card;
                return(
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={2}></Grid.Column>

                            <Grid.Column width={6}>
                                <h4>Vendor Information</h4>
                                <h5>{Payee.Name}</h5>
                                <p>Fax: {Payee.Fax}</p>
                                <p>Phone: {Payee.Phone}</p>
                                <p>Address: {Payee.Address.Address1} {Payee.Address.Address2}</p>
                                <p>City: {Payee.Address.City}</p>
                                <p>State: {Payee.Address.StateOrProvince}</p>
                                <p>{Payee.Address.Country}</p>
                                <p>{Payee.Address.PostalCode}</p>
                            </Grid.Column>

                            <Grid.Column width={1}></Grid.Column>

                            <Grid.Column width={5}>
                                <h4>Payment Information</h4>
                                <p>Attention: {Payee.Attention}</p>
                                <p>Submission Date: {Payee.SubmissionDate}</p>
                                <p>Permanent Account Number: {Payment.PAN}</p>
                                <p>CVV: {Payment.CVV}</p>
                                <p>Expiration Date: {Payment.Exp}</p>
                            </Grid.Column>
                                            
                            <Grid.Column width={2}></Grid.Column>
                        </Grid.Row>
                                            
                        <Grid.Row>
                            {Remittance.map((payor, index) => {
                                return(
                                    <Grid.Column width={16}>
                                        <Card fluid>
                                            <h4>Invoice</h4>
                                            <p>Paid By: {payor.PayorName}</p>
                                            <p>ID: {payor.PayorId}</p>
                                            <p>Invoice Number: {payor.InvoiceNo}</p>
                                            <p>Description: {payor.Description}</p>
                                            <p>Amount: {payor.Amount}</p>
                                        </Card>
                                    </Grid.Column>
                                )
                            })}
                        </Grid.Row>
                    </Grid>
                )
            })}
        </div>
    )
}

export default displayCard