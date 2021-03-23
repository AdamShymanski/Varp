import React, { useState } from 'react'
import "./../../sass/elements/ThirdElement-style.scss";
import ForumIcon from '@material-ui/icons/Forum';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import GradeIcon from '@material-ui/icons/Grade';


function Card({ id, icon, title, description}) {
    return (
    <div className='card flexColumn'>
        {icon}
            <div className='card__title poppinsFont'>{title}</div>
            <div className='card__description poppinsFont'>
                {description}
            </div>
    </div>)
}


function ThirdElement(props) {
    const data = [{ 'title': <h3>1. Express your opinion about this project</h3>,
                    'icon': <ForumIcon className='card__icon' />,
                    'description': <p>Yes, it's really that simple. I'm working alone and I miss other people's opinions about my idea.
                        <br/>
                        Just write if you think Pyramid has a chance, what do you like and what not, what would you improve and so on ... </p>
                  },
                  { 'title': <h3>2. Create an account <br/> DO IT NOW AND GET PREMIUM PRIVILEGES</h3>,
                    'icon': <MonetizationOnIcon className='card__icon' />,
                    'description': <p>This is very important. <br/><br/>
                        Registered users show that the project has interest. This makes companies more likely to collaborate with us, which gives Pyramid a chance to grow. Money from cooperation is a source of income for Pyramid and a source of money for rewards for you. The more registered users the better.
                        <br/><br/>If you create an account at this stage, your account will have premium privileges :
                        
                        <li> You will be able to join the first few games for free </li>
                        <li> In the future, you will have to do fewer tasks to get a lot of points </li>
                        <li> And I will definitely pay you back for your help </li></p>
                  },
                  { 'title': <h3>3. Tell your friends about Pyramid</h3>,
                    'icon': <GradeIcon className='card__icon' />,
                    'description': <p>Just send them a link to our site and summarize what you already know about us. It's the best thing you can do for me :) </p>
                  }
                 ]
    return (
      <main className={`${props.visibility() ? " visible" : "invisible"}`}>
        <article className='third'>

          <div className='title poppinsFont flexRow'>
              <div className='accentLine' />
              <p>How you can help</p>
          </div>
          <div className='body poppinsFont'>
              <p>I need your help!
              There are 3 ways you can help me build this project and create reality out of a dream
              </p>
          </div>
          <div className='cardWrapper flexColumn'>
              {data.map((each, i)=>
                  <Card
                      id={i}
                      icon={each.icon}
                      title={each.title}
                      description={each.description}
              />
              )}
          </div>
        </article>
      </main>

    )
}

export default ThirdElement
