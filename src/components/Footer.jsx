import { Link } from "react-router-dom"
import Logo from '../images/logo.png'
import { FaLinkedin, FaFacebook } from "react-icons/fa"
import { AiOutlineTwitter, AiFillInstagram } from "react-icons/ai"

const Footer = () => {
  return (
    <footer>
        <div className="container footer__container">
            <article>
                <Link to='/' className="logo">
                    <img src={Logo} alt="Footer" />
                </Link>
                <p>
                    Lorem ipsum dolor, s
                    it amet consectetur
                     adipisicing elit. Bla
                     nditiis beatae tempor
                     ibus inventore sed na
                     tus, incidunt ipsa ad 
                     quisquam error sapient
                     e facilis dolorum per
                     ferendis laborum voluptatem dignissi
                     mos pariatur aspernatur aperiam repe
                     llendus.
                </p>
                <div className="footer__socials">
                    <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer noopener"><FaLinkedin/></a>
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer noopener"><FaFacebook/></a>
                    <a href="https://www.twitter.com/" target="_blank" rel="noreferrer noopener"><AiOutlineTwitter/></a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer noopener"><AiFillInstagram/></a>
                </div>
            </article>
            <article>
                <h4>Permalinks</h4>
                <Link to="/about">About</Link>
                <Link to="/plans">Plans</Link>
                <Link to="/trainers">Trainers</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contact">Contact</Link>
            </article>
            <article>
                <h4>Insight</h4>
                <Link to="/s">Blog</Link>
                <Link to="/s">Case Studies</Link>
                <Link to="/s">Events</Link>
                <Link to="/s">Communities</Link>
                <Link to="/s">FAQs</Link>
            </article>
            <article>
                <h4>Get In Touch</h4>
                <Link to="/contact">Contact Us</Link>
                <Link to="/s">Support</Link>
            </article>
        </div>
        <div className="footer__copyright">
            <small>2022 EGATOR TUTORIALS &copy; All Rights Reserved</small>
        </div>
    </footer>
  )
}

export default Footer