import { FaAngleDown } from 'react-icons/fa';
import './navbar.css';

function navbar() {
  return (
    <div className="navbar">
      <img
        className="logo"
        src=" https://assets-global.website-files.com/627bfc08107c6a6fc647c28b/627bfc2b16af103b1a59c035_logo-a.svg"
      />
      <div>
        <ul className="navbarli">
          <li>
            <a href="/products">
              Products
              <span>
                <FaAngleDown />
              </span>
            </a>
          </li>
          <li>
            <a href="/solution">
              Solutions
              <span>
                <FaAngleDown />
              </span>
            </a>
          </li>
          <li>
            <a>Templates</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a href="/resoursce">
              Resources
              <span>
                <FaAngleDown />
              </span>
            </a>
          </li>
        </ul>
      </div>
      <div>
        <ul className="contact navbarli">
          <li>
            <a>Contact Sales</a>
          </li>
          <li className="login">
            <a>Login</a>
          </li>
          <li className="Signup">
            <a>Sign up</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default navbar;
