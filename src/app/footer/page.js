import './footer.css';

function page() {
  return (
    <div>
      <section className="footer_section">
        <div className="footer">
          <div className="arena">
            <div className="logo">arena</div>
            <p className="footer_para">
              Arena is a market-leading communication <br /> platform for
              communities to engage and <br />
              connect in a digital world.
            </p>
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
              <li>Company</li>
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
        <div className="Copyright">
          Copyright © 2024 Arena | All Rights Reserved | Terms and Conditions |
          Privacy Policy
        </div>
      </section>
    </div>
  );
}

export default page;
