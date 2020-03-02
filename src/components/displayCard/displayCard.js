//Necessary dependencies, data and components.
import React from 'react';
import { Grid } from 'semantic-ui-react'
import "./style.css"

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
                    <Grid columns={3} className='cards'>
                        <Grid.Row>
                            <Grid.Column className='payeeCard'>
                                <h4 className='cardHeader'>Vendor Information</h4>
                                <hr></hr>
                                <h5>{Payee.Name}</h5>
                                <p><strong>Fax:</strong> {Payee.Fax}</p>
                                <p><strong>Phone:</strong> {Payee.Phone}</p>
                                <p>{Payee.Address.Address1} {Payee.Address.Address2}</p>
                                <p>{Payee.Address.City}, {Payee.Address.StateOrProvince} {Payee.Address.PostalCode}</p>
                                <p>{Payee.Address.Country}</p>
                            </Grid.Column>

                            <Grid.Column>
                                <div className='promotionCard'>
                                    <h4 className='cardHeader'>Need Help?</h4>
                                    <hr></hr>
                                    <p><strong>Contact us for additional assistance.</strong></p>
                                    <p>7401 Beaufont Springs Drive, Suite 300</p>
                                    <p>Richmond, VA 23225</p>
                                    <a href='tel:877-680-7332'>(877) 680-7332</a>
                                    <br></br>
                                    <a href = "mailto: support@paymerang.com">support@paymerang.com</a>
                                </div>
                            </Grid.Column>

                            <Grid.Column className='paymentCard'>
                                <h4 className='cardHeader'>Payment Information</h4>
                                <hr></hr>
                                <p><strong>Attention:</strong> {Payee.Attention}</p>
                                <p><strong>Submission Date:</strong> {Payee.SubmissionDate}</p>
                                <p><strong>Permanent Account Number:</strong> {Payment.PAN}</p>
                                <p><strong>CVV:</strong> {Payment.CVV}</p>
                                <p><strong>Expiration Date:</strong> {Payment.Exp}</p>
                            </Grid.Column>
                        </Grid.Row>
                                            
                        <Grid.Row>
                            {Remittance.map((payor, index) => {
                                return(
                                    <Grid.Column>
                                        <div className='invoiceCard'>
                                            <h4 className='cardHeader'>{payor.PayorName} Invoice #{payor.InvoiceNo}</h4>
                                            <hr></hr>
                                            <p>Payor ID: {payor.PayorId}</p>
                                            <p>Description: {payor.Description}</p>
                                            <p>Amount: {payor.Amount}</p>
                                        </div>
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