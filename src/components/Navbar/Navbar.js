import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import './style.css'
import Logo from './logo.png'

export default class Navbar extends Component {
    render(){
        return(
            <Menu className='navbar'>
                <Menu.Item>
                    <img src={Logo} alt='Paymerang Logo'></img>
                </Menu.Item>
            </Menu>
        )
    }
}
