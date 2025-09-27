import React from 'react'
import IconBox from '../public/assets/components/IconBox'
import { Card_Data } from './Card_Data'

const App = (props) => {
  return (
    <section>
      <div className="container">
        <h1 className="heading">Trusted by over 500 great businesses</h1>
        <div className="p-box">
          <p className="paragraph">Startup Framework includes great form options for your startup projects. Each
            component is coded for
            web
            which makes creating a website quick and easy</p>
        </div>
        <div className="row">
          {Card_Data.map((card, i) => {
            return <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={i}>
              <IconBox img={card.img}/>
              </div>
          })}
          </div>
      </div>
    </section >
  )
}

export default App