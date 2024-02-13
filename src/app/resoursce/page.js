import { FaArrowRight } from 'react-icons/fa';
import Article from '../article/page';

import './resoursce.css';

function resoursce() {
  return (
    <div class="resource">
      <div class="title">RESOURCES</div>

      <div class="r_grid-container">
        <div class="grid-item">
          <a className="Ra">
            <span>Blog </span> <FaArrowRight />
          </a>
          <p className="Rp">The latest trends in audience engagement</p>
        </div>
        <div class="r_grid-item">
          <a className="Ra">Developer Hub</a>
          <p className="Rp">API documentation, integrations, and much more</p>
        </div>
        <div class="r_grid-item">
          <a className="Ra">Webinars</a>
          <p className="Rp">
            Join upcoming events to boost your audience engagement
          </p>
        </div>
        <div class="r_grid-item">
          <a className="Ra">Community</a>
          <p className="Rp">Get inspired by the Arena community</p>
        </div>
        <div class="r_grid-item">
          <a className="Rp">
            <span> Helper Center</span> <FaArrowRight />
          </a>
          <p className="Rp">
            Knowledge base articles on getting the most out of Arena
          </p>
        </div>
        <div class="r_grid-item">
          <a className="Ra">Academy</a>
          <p className="Rp">Learn how to use Arena, interactively</p>
        </div>
        <div class="r_grid-item">
          <a className="Ra">
            <span>Support</span>
            <FaArrowRight />
          </a>
          <p className="Rp">Contact a member of the team</p>
        </div>
        <div class="r_grid-item">
          <a className="Ra">
            <span>Cusomers</span>
            <FaArrowRight />
          </a>
          <p className="Rp">Learn how Arena has helped customers</p>
        </div>
      </div>
      <Article />
      {/* <!-- <div class="view">View all articles</div> --> */}
    </div>
  );
}

export default resoursce;
