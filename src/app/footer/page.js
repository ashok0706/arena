import { CiYoutube } from 'react-icons/ci';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import './footer.css';

function footer() {
  return (
    <section className=" footer_section">
      <div className="footer">
        <div className="arena">
          <div>
            <img
              className="logo"
              src=" https://assets-global.website-files.com/627bfc08107c6a6fc647c28b/627bfc2b16af103b1a59c035_logo-a.svg"
            />
          </div>

          <p className="footer_para">
            Arena is a market-leading communication <br /> platform for
            communities to engage and <br />
            connect in a digital world.
          </p>
          <div className="icons">
            <FaFacebookF />
            <FaXTwitter />
            <FaInstagram />
            <FaLinkedinIn />
            <CiYoutube />
          </div>
        </div>

        <div className="products">
          <ul className="footerli">
            <li>Products</li>
            <li>Commerce</li>
            <li>Live Blog</li>
            <li>Live Chat</li>
            <li>Pricing</li>
            <li>Shopify integration</li>
          </ul>
        </div>
        <div className="company">
          <ul className="footerli">
            <li className="footer_li">Company</li>
            <li>About us</li>
            <li>Contact Sales</li>
            <li>Careers</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="support">
          <ul className="footerli">
            <li>Support</li>
            <li>Contact us</li>
            <li>Help center</li>
          </ul>
        </div>
        <div className="solutions">
          <ul className="footerli">
            <li>Solutions</li>
            <li>Media &amp; Publishing</li>
            <li>Second Screen</li>
            <li>Sports</li>
            <li>Ecommerce &amp; Marketplace</li>
            <li>Hybrid Events</li>
          </ul>
        </div>
      </div>
      <br></br>
      <div className="Copyright">
        Copyright © 2024 Arena | All Rights Reserved | Terms and Conditions |
        Privacy Policy
      </div>
    </section>
  );
}

export default footer;
