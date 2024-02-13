import { BiChat } from 'react-icons/bi';
import { BsStars } from 'react-icons/bs';
import { FaArrowRight } from 'react-icons/fa';
import { HiOutlineSpeakerphone } from 'react-icons/hi';
import Article from '../article/page';
import './product.css';
function products() {
  return (
    <div className="resource">
      <div className="title">OUR PRODUCTS</div>
      <div className="p_grid-container">
        <div className="grid-item">
          <div>
            <h4 className="tag">
              <BsStars />
              <span>Commerce AI</span> <FaArrowRight />
            </h4>
            <p className="product_p">
              Convert visitors to customers with an <br />
              AI chat experience
            </p>
          </div>
        </div>
        <div className="p_grid-item">
          <div>
            <h4 className="tag">
              <HiOutlineSpeakerphone />
              <span>Live Blog</span> <FaArrowRight />
            </h4>
            <p className="product_p">
              Second-by-second content streams <br />
              to engage you audience
            </p>
          </div>
        </div>
        <div className="p_grid-item">
          <div>
            <h4 className="tag">
              <BiChat />
              <span> Live Chats</span>
              <FaArrowRight />
            </h4>
            <p className="product_p">
              Build community-led growth with
              <br /> group conversations, anywhere
            </p>
          </div>
        </div>
      </div>
      <Article />
    </div>
  );
}

export default products;
