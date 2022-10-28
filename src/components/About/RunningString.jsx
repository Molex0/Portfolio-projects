import React from 'react'
import './RunningString.css'
import { Parallax } from 'react-scroll-parallax'

const RunningString = () => {
  return (
    <section>
        <div className="runningsrtring__container">
          <div className="runningsrtring">
            <Parallax translateX={['-200px', '0px']} easing="easeInQuad">
                <div className='str1'>HTML / CSS / JavaScript</div>
            </Parallax>
            <Parallax translateX={['200px', '0px']} easing="easeInQuad">
                <div className='str2'>ReactJS / React Router</div>
            </Parallax>
          </div>
        </div>
    </section>
  )
}

export default RunningString