import React from 'react';
import {Link} from 'react-router-dom';
import Logo_black from '../../logo/Logo_black.svg';
import Beans_logo_dark from '../../logo/Beans_logo_dark.svg';
import '../../sass/footer.sass';

export const Footer = () => {
    return (
        <footer>
        <div className="container">
            <div className="row">
                <div className="col-lg-5 offset-lg-4">
                    <ul className="footer">
                        <li className="footer__item">
                            <Link to='/'>
                                <img src={Logo_black} alt="logo"/>
                            </Link>
                        </li>
                        <li className="footer__item">
                            <Link to='/coffepage'>Our coffee</Link>
                        </li>
                        <li className="footer__item">
                            <Link to='/pleasure' >For your pleasure</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <img className="beanslogo" src={Beans_logo_dark} alt="Beans logo"/>
        </div>
    </footer>
    )
}