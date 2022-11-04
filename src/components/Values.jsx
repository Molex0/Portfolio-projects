import Image from '../images/values.jpg'
import SectionHeader from './SectionHeader'
import {GiCutDiamond} from 'react-icons/gi'
import {values} from '../data'
import Card from '../UI/Card'

function Values() {
  return (
    <section className='values'>
        <div className="container values__container">
            <div className="value__left">   
                <img src={Image} alt="Values" />
            </div>
            <div className="value__right">  
                <SectionHeader icon={<GiCutDiamond/>} title='Values'/>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Quod laboriosam ut molestiae sapiente debitis optio, dicta iste minima velit qui magni dolore, laborum ratione possimus 
                    repudiandae? Doloribus obcaecati amet quasi.
                </p>
                <div className="values__wrapper">   
                    {
                        values.map(({id,icon,title,desc})=>{
                            return <Card className='values__value' key={id}>
                                <span>{icon}</span>
                                <h4>{title}</h4>
                                <small>{desc}</small>
                            </Card>
                        })
                    }
                </div>
            </div>
        </div>    
    </section>
  )
}

export default Values