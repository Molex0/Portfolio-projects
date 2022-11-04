import HeaderImage from '../../images/header_bg_2.jpg'
import Header from '../../components/Header'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'
import './contact.css'

const Contact = () => {
  return (
    <>
    <Header title="Get In Touch" image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum consequatur harum ex corporis ratione sequi dicta enim officia vero nesciunt animi, maxime culpa sint, eum ullam autem temporibus possimus nostrum.
    </Header>
    <section className="contact">
      <div className="container contact__container">
        <div className="contact__wrapper">
          <a href="mailto:support@egattor.com" target="_blank" rel='noreferrer noopener'><MdEmail/></a>
          <a href="http://m.me/ernest_achiever" target="_blank" rel='noreferrer noopener'><BsMessenger/></a>
          <a href="https://wa.me/+233557097546" target="_blank" rel='noreferrer noopener'><IoLogoWhatsapp/></a>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact
