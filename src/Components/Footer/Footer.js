import React from "react";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="ft_container">
          <div className="sec ft_aboutus">
            <h2>About Us</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <ul className="ft_sci">
              <li>
                <a href="#">
                  <i className="ft_facebook">
                    <FaFacebookF />
                  </i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="ft_twitter">
                    <FaTwitter />
                  </i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="ft_instagram">
                    <FaInstagram />
                  </i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="ft_facebook">
                    <CiYoutube />
                  </i>
                </a>
              </li>
            </ul>
          </div>
          <div className="sec ft_quicklinks">
            <h2>Support</h2>
            <ul>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Privacy policy</a>
              </li>
              <li>
                <a href="#">Help</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="ft_quicklinks">
            <h2>Shop</h2>
            <ul>
              <li>
                <a href="#">Men</a>
              </li>
              <li>
                <a href="#">Women</a>
              </li>
              <li>
                <a href="#">Kids</a>
              </li>
              <li>
                <a href="#">Shoes</a>
              </li>
            </ul>
          </div>
          <div className="sec ft_contact">
            <h2>Contact Us</h2>
            <ul className="ft_info">
              <li>
                <span>
                  <i>
                    <IoIosCall />
                  </i>
                </span>
                <p>
                  <a href="tel:+12345678900"> +1 234 567 8900</a>
                </p>
              </li>
              <li>
                <span>
                  <i>
                    <MdEmail />
                  </i>
                </span>
                <p>
                  <a href="mailto:knowmore@emailto.mee">knowmore@emailto.mee</a>
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="ft_copyrightText">
          <p>Copyright@2023 Online Tutorials. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
