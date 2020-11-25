import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../logo/Logo.svg';
import '../../sass/header.sass';

export const Header = () => {
    return (
        <>
            <header>
                <ul className="header">
                    <li className="header__item">
                        <Link to='/'>
                            <img src={logo} alt="logo"/>
                        </Link>
                    </li>
                    <li className="header__item">
                        <Link to='/coffepage'>Our coffee</Link>
                    </li>
                    <li className="header__item">
                        <Link to='/pleasure' >For your pleasure</Link>
                    </li>
                </ul>
            </header>
        </>
    )
}