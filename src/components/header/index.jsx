import React from 'react';
import {useSelector} from 'react-redux'

import {Link} from 'react-router-dom'
import logo from '../../assets/logo.svg'

import './style.css'

function Header() {
    const reserveSize = useSelector(state => state.reserve.length)

    return (
        <header className='container'>
            <Link to="/">
               <img className='logo' src={logo} alt="logo Projeto"/>
            </Link>
            <Link className='reserva' to="/reservas">
                <div>
                    <strong>Minhas reservas</strong>
                    <span>{reserveSize} {reserveSize > 1 ? 'Reservas': 'Reserva'}</span>
                </div> 
            </Link>
        </header>
    );
}

export default Header;