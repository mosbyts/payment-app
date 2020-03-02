import React, { Component } from 'react'
import Logo from './logo.png'

export default class Header extends Component {
    render(){
        return(
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <img src={Logo} alt="Paymerang Logo" />
            </nav>
        )
    }
}