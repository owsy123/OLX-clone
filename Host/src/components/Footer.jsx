import React from 'react';
import "../styles/footer.css"

const Footer = () => {
    return (
        <div className="footer">
            <div className="container d-flex footer-content">
                <div>
                    <span className="d-inline-block mr-2 b">Other Contries</span>
                    <span className="d-inline-block mr-2">South-Africa</span>
                    <span className="d-inline-block mr-2">Indonesia</span>
                </div>
                <div>
                    <span className="d-inline-block mr-2 b">Free Classifieds in Pakistan</span>
                    <span className="d-inline-block mr-2">	&#169; 2006-2020 OLX</span>
                </div>
            </div>
        </div>
    );
}

export default Footer;
