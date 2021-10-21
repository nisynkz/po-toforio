import CoverImage from "../images/kaka.jpg";
import ProfImage from "../images/fwfw.jpg";
import { FaTwitter, FaGithub } from "react-icons/fa";


export const Header = () => {
    return (
      <header className="main-cover" style={{backgroundImage: `url(${CoverImage})`}}>
        <div className="overlay"></div>
        <div className="container">
          <div className="display-table">
            <div className="display-table-contents">
              <div className="profile-thumb" style={{backgroundImage: `url(${ProfImage})`}}></div>
              <h1 className="title-text">西科</h1>
              <h3 className="title-text">２２歳</h3>
              <ul className="social-icons">
                <li className="icon-link">
                    <a href="https://twitter.com/Nisynkz">
                        <FaTwitter color="white" size="2rem" />
                    </a>
                  
                </li>
                <li className="icon-link">
                    <a href="https://github.com/nisynkz">
                        <FaGithub color="white" size="2rem" />
                    </a>
                  
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    );
  };
  