import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import menus from '../menus';


class Header extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    render() {
        return (
            <header id="header" className="header header-style1">
                <div className="container">
                    <div className="flex-header d-flex justify-content-between align-items-center">
                        <div className="socials-list-hd s1 hv1">
                        <a 
            href='https://www.facebook.com/notyouraverageblogger1'
            target="_blank"
            rel="noopener noreferrer"
             className="fa fa-facebook" aria-hidden="true" > </a>
                    
            <a
            href='https://www.linkedin.com/in/mishal-adnan/'
            target="_blank"
            rel="noopener noreferrer"
             className="fa fa-linkedin" aria-hidden="true" > </a>

            <a
            href='https://www.instagram.com/regalstudio.pk/'
            target="_blank"
            rel="noopener noreferrer"
           className="fa fa-instagram" aria-hidden="true"> </a>
                        </div>
                        <div className="content-menu d-lg-flex">
                            <div className="nav-wrap">
                                <nav id="mainnav" className="mainnav">
                                    <ul className="menu ace-responsive-menu" data-menu-style="horizontal">
                                        {/* <li><Link to="/" className="active">Home</Link>
                                            <ul className="sub-menu" >
                                                {
                                                    links.map(data => (
                                                        <li key={data.id}>
                                                            <Link to={data.tolink} onClick={() => {window.location.href=data.tolink}} className={data.id === 1 ? "active" : ""}>
                                                                {data.namelink}
                                                            </Link>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </li>    */}
                                        {
                                            menus.map(menu => (
                                                <li key={menu.id}><Link to={menu.tomenu} className="click-model">{menu.namemenu}</Link></li>
                                            ))
                                        }                           
                                        {/* <li><Link to="#">Blog</Link>
                                            <ul className="sub-menu" >
                                                {
                                                    bloglinks.map(data => (
                                                        <li key={data.id}>
                                                            <Link to={data.toblog} onClick={() => {window.location.href=data.toblog}}>
                                                                {data.nameblog}
                                                            </Link>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </li>  */}
                                    </ul>
                                </nav>
                            </div>
                            <div className="hire-me-s1 btn-general btn-hv-common d-lg-flex align-items-center">
                            <a href="https://www.linkedin.com/in/mishal-adnan/" target="_blank" rel="noreferrer" className="btn-inner border-corner2 lt-sp08 text-white">Hire Me</a>
                            </div>
                        </div>
                        <div dir="rtl" className="btn-menu mobile-header__menu-button">
                            <div className="line line-1" />
                            <div className="line line-2" />
                            <div className="line line-3" />
                            <div className="line line-4" />
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
