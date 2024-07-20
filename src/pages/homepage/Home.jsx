import React from 'react'
import Hero from './Hero'
import Instructors from './instructors'
import node from "../../assets/col1.jpg";
import win from "../../assets/win.jpg"
const Home = () => {
  return (
    <div className='fun'> 
      <section className="items"><Hero/></section>
      <section className="popular">
        <h2 className="head">popular courses</h2>
      <div className="pop">
        <div className="cor">
          <img src={node} alt="pic" id='img' />
          <section className="data">
            <h3> UI/UX design</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </section>
          <p>learn more</p>
        </div>
        <div className="cor">
        <img src={node} alt="pic" id='img' />
          <section className="data">
            <h3>learn Nodejs</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </section>
          <p>learn more</p>
        </div>
        <div className="cor">
        <img src={node} alt="pic" id='img' />
          <section className="data">
            <h3>learn React</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </section>
          <p>learn more</p>
        </div>
        <div className="cor">
        <img src={node} alt="pic" id='img' />
          <section className="data">
            <h3>learn Prisma</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </section>
          <p>learn more</p>
        </div>
      </div>
      </section>
      <section className="items">< Instructors/></section>
      <section className="test">
        <h2 className="head">what our client say</h2>
        <section className="tell">
        <div className="comrade">
          <img src={win} alt="" className="iconic" />
          <div className="data">
            <h3>ken washington</h3>
            <p>"I learnt more than my teachers ever taught me, am now a cs  Guru"</p>
  
          </div>
        </div>
        <div className="comrade">
          <img src={win} alt="" className="iconic" />
          <div className="data">
            <h3>ken washington</h3>
            <p>"I learnt more than my teachers ever taught me, am now a cs  Guru"</p>
  
          </div>
        </div>
        <div className="comrade">
          <img src={win} alt="" className="iconic" />
          <div className="data">
            <h3>ken washington</h3>
            <p>"I learnt more than my teachers ever taught me, am now a cs  Guru"</p>
  
          </div>
        </div>
        </section>
      </section>
      
    </div>
  )
}

export default Home
