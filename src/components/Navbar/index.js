import React, { useState } from "react";
import { Link } from 'react-router-dom';

import '../Navbar/Navbar.css'

import Hamburger from 'hamburger-react'
import { BsTwitter } from 'react-icons/bs';
import { BiLogoTelegram, BiSolidBookReader } from 'react-icons/bi';

import BaseOhmLogo from '../../images/baseohm.png'

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);
    const [menuOpen, setMoreMenuOpen] = useState(false);

    function MoreMenuOpen() {
        setMoreMenuOpen(!menuOpen);
    }

    function handleCloseMenu() {
        setMoreMenuOpen(false);
    }

    return (
        <div>

            <div className="MenuHamburger" onClick={() => MoreMenuOpen()}>
                <Hamburger toggled={isOpen} toggle={setOpen} direction="right" duration={0.8} size={30} />
            </div>

            <div className={'NavbarSection-' + (menuOpen ? "Open" : "Closed")}>

                <div className='NavbarBoxes'>


                    <div className='NavBarLogo'>
                        <img src={BaseOhmLogo} />
                    </div>
                    <div className='NavbarMenu'>
                        <Link to='/Presale' onClick={handleCloseMenu}><p>Presale</p></Link>
                        <Link to='/' onClick={handleCloseMenu}><p>Dashboard</p></Link>

                        <div className='ribboncontainer ribbon'>
                            <Link><span>Coming soon</span><p>Staking</p></Link>
                        </div>

                        <div className='ribboncontainer ribbon'>
                            <Link><span>Coming soon</span><p>Bonds</p></Link>
                        </div>

                        <Link to='/Calculator' onClick={handleCloseMenu}><p>Calculator</p></Link>
                        <a href='https://twitter.com/home' target='_blank' onClick={handleCloseMenu}><p>Documentation</p></a>

                        <div className='NavbarSocials'>
                            <div className='Socials'>
                                <BsTwitter className='SocialBtn' style={{ verticalAlign: 'middle' }} size='2rem' />
                                <BiLogoTelegram className='SocialBtn' style={{ verticalAlign: 'middle' }} size='2rem' />
                                <BiSolidBookReader className='SocialBtn' style={{ verticalAlign: 'middle' }} size='2rem' />
                            </div>
                        </div>

                    </div>
                </div>
            </div>




        </div>
    )
}

export default Navbar