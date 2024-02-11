import { FaAngleDown } from 'react-icons/fa';
import '/src/app/glob.css';
import '/src/app/globals.css';

function navbar() {
  return (
    <div class="sticky">
      <div
        class="navbar-4 w-nav"
        data-animation="default"
        data-collapse="medium"
        data-duration="400"
        data-easing="ease"
        data-easing2="ease"
        role="banner"
      >
        <div class="main-container w-container">
          <div class="navv2-inner-wrapper">
            <div class="nav-v2-inner">
              <div class="navbar-new-menu-right">
                <a
                  aria-current="page"
                  class="brand-link w-nav-brand w--current"
                  href="/"
                >
                  <img
                    alt="Arena logo"
                    class="logo"
                    loading="lazy"
                    src="https://assets-global.website-files.com/627bfc08107c6a6fc647c28b/627bfc2b16af103b1a59c035_logo-a.svg"
                  />
                </a>
                <nav class="navbar-v2-links w-nav-menu" role="navigation">
                  <div
                    class="navv2-dropdown w-dropdown"
                    data-delay="0"
                    data-hover="false"
                  >
                    <div class="navv2-link w-dropdown-toggle">
                      <a class="navv2-link w-nav-link" href="/products">
                        Products <FaAngleDown />
                      </a>
                      <div class="text-block-147"></div>
                    </div>
                  </div>
                  <div
                    class="navv2-dropdown w-dropdown"
                    data-delay="0"
                    data-hover="false"
                  >
                    <div class="navv2-link w-dropdown-toggle">
                      <a class="navv2-link w-nav-link" href="/solution">
                        Solutions
                        <FaAngleDown />
                      </a>
                      {/* <div class="text-block-147">ï¸</div> */}
                    </div>
                  </div>

                  <a class="navv2-link w-nav-link" href="#">
                    Templates
                    <span class="navigation-tag">Soon</span>
                  </a>
                  <a class="navv2-link w-nav-link" href="/price">
                    Pricing
                  </a>
                  <div
                    class="navv2-dropdown w-dropdown"
                    data-delay="0"
                    data-hover="false"
                  >
                    <div class="navv2-link w-dropdown-toggle">
                      <a class="navv2-link w-nav-link" href="/resoursce">
                        Resoursces
                        <FaAngleDown />
                      </a>
                      {/* <div class="text-block-147">ï¸</div> */}
                    </div>
                  </div>
                </nav>
              </div>
              {/* <!-- contact login --> */}
              <div class="nav-menu-btn-block desktop">
                <a class="navv2-link w-nav-link" href="/contact">
                  Contact Sales
                </a>
                <a
                  class="navigation-button outline w-button"
                  href="https://app.arena.im/auth/login"
                >
                  Login
                </a>
                <a
                  class="navigation-button w-button"
                  href="https://app.arena.im/auth/create"
                  target="_blank"
                >
                  Sign up
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default navbar;
