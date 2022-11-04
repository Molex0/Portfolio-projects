import Header from '../../components/Header'
import './about.css'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'

const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorem ipsum dolo
        r sit amet consectetur adipisicing 
        elit. Dolore molestias sed debitis aliqu
        am ducimus earum quaerat perspiciatis por
        ro corrupti. Ex nobis quidem consequuntur
        ab, repellendus vel
        it. Provident veritatis quod explicabo!
      </Header>
      <section className='about__story'>
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Our story" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid ipsa aliquam numquam dolorem laboriosam. Natus, laboriosam. Suscipit, dolore consectetur? Perspiciatis perferendis quos nostrum illum explicabo autem aliquid reprehenderit magni aperiam!</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, veritatis mollitia voluptates enim nihil reiciendis magni a, ratione, illo numquam necessitatibus dicta accusamus delectus non error doloribus laboriosam eos dolorum.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, adipisci accusantium. Eaque, quaerat similique! Enim ut cumque officiis rem et asperiores necessitatibus, aspernatur doloremque magni tempora tenetur quia eveniet facere.</p>
          </div>
        </div>
      </section>
      <section className='about__vision'>
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid ipsa aliquam numquam dolorem laboriosam. Natus, laboriosam. Suscipit, dolore consectetur? Perspiciatis perferendis quos nostrum illum explicabo autem aliquid reprehenderit magni aperiam!</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, veritatis mollitia voluptates enim nihil reiciendis magni a, ratione, illo numquam necessitatibus dicta accusamus delectus non error doloribus laboriosam eos dolorum.</p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="Our vision" />
          </div>
        </div>
      </section>
      <section className='about__mission'>
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Our mission" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid ipsa aliquam numquam dolorem laboriosam. Natus, laboriosam. Suscipit, dolore consectetur? Perspiciatis perferendis quos nostrum illum explicabo autem aliquid reprehenderit magni aperiam!</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, veritatis mollitia voluptates enim nihil reiciendis magni a, ratione, illo numquam necessitatibus dicta accusamus delectus non error doloribus laboriosam eos dolorum.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
