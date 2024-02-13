import { FaArrowRightLong } from 'react-icons/fa6';
import './article.css';

function article() {
  return (
    <div class="Aresource">
      <div class="title">LATEST ARTICLES</div>

      <div>
        <div className="grid-container">
          <div className="grid-item">
            <div>
              <img
                src="https://assets-global.website-files.com/6286a54d607a6c170e3cbb9c/65b8091138fc7c3ce56eb097_first-party-data-publishing-revenue.webp"
                alt="Example Image"
                className="thumbnail"
              />
            </div>
            <div>
              <h4 className="Atag">
                Increase Publishing
                <br />
                Revenue With These 5 <br />
                First-Party Data Levers
              </h4>
              <p className="Ap">
                Utilizing first-party data can <br />
                significantly boost revenue for <br />
                publishers. Learn about the types of
                <br />
                data that fall under this
                <br /> valuable category.
              </p>
            </div>
          </div>
          <div className="grid-item">
            <div>
              <img
                src="https://assets-global.website-files.com/6286a54d607a6c170e3cbb9c/65a6ef30e1700e66b9e00673_arena_blog_no_cookies_for_you.webp"
                alt="Example Image"
                className="thumbnail"
              />
            </div>
            <div>
              <h4 className="Atag">No Cookies For You</h4>
              <p className="Ap">
                Google Chrome has destroyed <br />
                3rd-Party Cookies and whats next
              </p>
            </div>
          </div>
          <div className="grid-item">
            <div>
              <img
                src="https://assets-global.website-files.com/6286a54d607a6c170e3cbb9c/65a6f1626fa2d24f09f2fef7_arena_blog_end_of_cookies.webp"
                alt="Example Image"
                className="thumbnail"
              />
            </div>
            <div>
              <h4 className="Atag">
                Thriving in a Cookieless
                <br /> World in 7 Steps
              </h4>
              <p className="Ap">
                Third-party cookies are dead,
                <br /> thanks to Google and Apple. Act ,<br /> quickly to
                transition away from ,<br /> third-party cookies.
              </p>
            </div>
          </div>
        </div>
        <div className="view">
          View all articles <FaArrowRightLong />
        </div>
      </div>
    </div>
  );
}

export default article;
