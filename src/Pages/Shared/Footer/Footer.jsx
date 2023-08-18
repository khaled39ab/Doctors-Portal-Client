import React from 'react';
import footer from '../../../assets/images/footer.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="p-10" style={{background: `url(${footer})`, backgroundSize: '100% 100%'}}>
            <div className='footer pl-10'>
                <div >
                    <span className="footer-title">Services</span>
                    <Link className="link link-hover">Branding</Link>
                    <Link className="link link-hover">Design</Link>
                    <Link className="link link-hover">Marketing</Link>
                    <Link className="link link-hover">Advertisement</Link>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link className="link link-hover">About us</Link>
                    <Link className="link link-hover">Contact</Link>
                    <Link className="link link-hover">Jobs</Link>
                    <Link className="link link-hover">Press kit</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link className="link link-hover">Terms of use</Link>
                    <Link className="link link-hover">Privacy policy</Link>
                    <Link className="link link-hover">Cookie policy</Link>
                </div>
            </div>
            <div className='text-center mt-28'>
                <small>Copyright © 2023 - All right reserved by Doctors portal</small>
            </div>
        </footer>
    );
};

export default Footer;