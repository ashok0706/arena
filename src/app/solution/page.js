import { FaArrowRightLong } from 'react-icons/fa6';
import Article from '../article/page';
import './solution.css';
function solution() {
  return (
    <div class="s_resource">
      <div class="title">SOLUTIONS</div>

      <div class="s_grid-container">
        <div class="grid-item">
          <a className="Sa">
            <span>
              Media, Publishing &<br></br>
              Entertainment
            </span>
            <FaArrowRightLong />
          </a>
          <p className="Sp">Drive subscriber engagement everywhere</p>
        </div>
        <div class="s_grid-item">
          <a className="Sa">
            <span>Second Screen </span>
            <FaArrowRightLong />
          </a>
          <p className="Sp">Boost Gen Z audience engagement</p>
        </div>

        <div class="s_grid-item">
          <a className="Sa">
            <span>Sports </span> <FaArrowRightLong />
          </a>
          <p className="Sp">Effortlessly enhance engagement</p>
        </div>
        <div class="s_grid-item">
          <a className="Sa">
            <span>E-commerces & Marketplaces </span> <FaArrowRightLong />
          </a>
          <p className="Sp">Enhance the live shopping experience</p>
        </div>
        <div class="s_grid-item">
          <a className="Sa">
            <span>Hybrid Events </span> <FaArrowRightLong />
          </a>
          <p className="Sp">Unify virtual and live audience interactions</p>
        </div>

        <div class="s_grid-item">
          <a className="Sa">
            <span>Social and Communities </span>
            <FaArrowRightLong />
          </a>
          <p className="Sp">Take your community back from social media</p>
        </div>
        <div class="s_grid-item">
          <a className="Sa">
            <span>Education & eLearning</span> <FaArrowRightLong />
          </a>
          <p className="Sp">
            Join upcoming events to boost your audience engagement
          </p>
        </div>
      </div>
      <Article />
      {/* <div class="view">View all articles</div> */}
    </div>
  );
}

export default solution;
