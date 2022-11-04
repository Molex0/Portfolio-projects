import SectionHeader from "./SectionHeader"
import {FaQuestion} from 'react-icons/fa'
import {faqs} from '../data'
import FAQ from "./FAQ"

function FAQs() {
  return (
    <section>
      <div className="container faqs__container">
        <SectionHeader icon={<FaQuestion/>} title='FAQs'/>
        <div className="faqs__wrapper">
          {
            faqs.map(({id,question,answer})=>{
              return <FAQ key={id} question={question} answer={answer}/>
            })
          }
        </div>
      </div>
    </section>
  )
}

export default FAQs