import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTwitter,
    faFacebookF,
    faYoutube,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";



export default function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-boxes">
                <div className="footer-box">
                    <h1>Find A Store</h1>
                    <h1>Become A Member</h1>
                    <h1>Sign Up for Email</h1>
                    <h1>Send Us Feedback</h1>
                    <h1>Student Discounts</h1>
                </div>
                <div className="footer-box">
                    <h1>Get Help</h1>
                    <ul>
                        <li>Order Status</li>
                        <li>Delivery</li>
                        <li>Returns</li>
                        <li>Payment Options</li>
                        <li>Contact Us On Nike.com Inquiries</li>
                        <li>Contact Us On All Other Inquiries</li>
                    </ul>
                </div>
                <div className="footer-box">
                    <h1>About Nike</h1>
                    <ul>
                        <li>News</li>
                        <li>NewsCareers</li>
                        <li>Investors</li>
                        <li>Sustainability</li>
                    </ul>
                </div>
                <div className="footer-box">
                    <div className="social-icons-container">
                        <div className="icon">
                            <FontAwesomeIcon icon={faTwitter} size="2x" />
                        </div>
                        <div className="icon">
                            <FontAwesomeIcon icon={faFacebookF} size="2x" />
                        </div>
                        <div className="icon">
                            <FontAwesomeIcon icon={faYoutube} size="2x" />
                        </div>
                        <div className="icon">
                            <FontAwesomeIcon icon={faInstagram} size="2x" />
                        </div>
                    </div>
                </div>	&#169;
            </div>
            <div className="footer-box1">
                <div className="box1-footer">
                    <img src="icone4.png" alt="icone" />
                    <h1>PAKISTAN</h1>
                </div>
                <p>&#169; 2023 Nike, Inc. All Rights Reserved</p>
                <ul>
                    <li>Guides</li>
                    <li>Terms of Sale</li>
                    <li>Terms of Use</li>
                    <li>Nike Privacy Policy</li>
                </ul>
            </div>
        </div>
    )
}