import React, { useState } from 'react'
import "./../../sass/elements/ThirdElementLanding-style.scss";
import BatteryChargingFullIcon from '@material-ui/icons/BatteryChargingFull';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import GradeIcon from '@material-ui/icons/Grade';
import FlareIcon from '@material-ui/icons/Flare';


function Card({ icon, title, description, expand, setExpand}) {
    if (expand == null) {
        var appendClass = "initial"
    } else if (expand === title){
        var appendClass = "expanded"
    } else {
        var appendClass = "collapsed"
    }
    return (
    <div className={`thirdCard flexColumn ${appendClass}`}
        onClick={(e)=>setExpand(title)}>
        {icon}
            <div className='cardTitleWrapper'>
                <p className='cardTitle poppinsFont'>{title}</p>
            </div>
            {appendClass=="initial" ?
            <p className='description poppinsFont'>
                {description}
            </p>
            :
            null}
    </div>)
}

function ThirdElementLanding() {
    const data = [{ 'title': "The power of our users",
                    'icon': <BatteryChargingFullIcon className='icon' />,
                    'description': "Our users can perform much more demanding tasks than users of, say, YouTube. This is due to the rewards they \
                        can receive for completing these tasks. YouTube can only offer to watch another video, while Pyramid offers \
                        players the chance to win a lot of money. This is a significant advantage of Pyramid over other services \
                        offering advertising or, for example, filling out surveys."
                    },
                    { 'title': "The power of our users",
                    'icon': <MonetizationOnIcon className='icon' />,
                    'description': "Our users can perform much more demanding tasks than users of, say, YouTube. This is due to the rewards they \
                        can receive for completing these tasks. YouTube can only offer to watch another video, while Pyramid offers \
                        players the chance to win a lot of money. This is a significant advantage of Pyramid over other services \
                        offering advertising or, for example, filling out surveys."
                    },
                    { 'title': "The power of our users",
                    'icon': <GradeIcon className='icon' />,
                    'description': "Our users can perform much more demanding tasks than users of, say, YouTube. This is due to the rewards they \
                        can receive for completing these tasks. YouTube can only offer to watch another video, while Pyramid offers \
                        players the chance to win a lot of money. This is a significant advantage of Pyramid over other services \
                        offering advertising or, for example, filling out surveys."
                    },
                    { 'title': "The power of our users",
                    'icon': <FlareIcon className='icon' />,
                    'description': "Our users can perform much more demanding tasks than users of, say, YouTube. This is due to the rewards they \
                        can receive for completing these tasks. YouTube can only offer to watch another video, while Pyramid offers \
                        players the chance to win a lot of money. This is a significant advantage of Pyramid over other services \
                        offering advertising or, for example, filling out surveys."
                    },
                 ]
    const [expand, setExpand] = useState("The power of our users")
    return (
        <article>
        <div className='title poppinsFont flexRow'>
            <div className='accentLine' />
            <p>Third Element</p>
          </div>
          <div className='body poppinsFont'>
            <p>
              fill third element description here. fill third element description here .
              fill third element description here .fill third element description here .
              fill third element description here .fill third element description here
            </p>
          </div>
        <div className='bottom flexRow'>
            <Card
                expand={expand}
                setExpand={setExpand}
                icon={<BatteryChargingFullIcon className='icon' />}
                title="The power of our users"
                description="Our users can perform much more demanding tasks than users of, say, YouTube. This is due to the rewards they
                    can receive for completing these tasks. YouTube can only offer to watch another video, while Pyramid offers
                    players the chance to win a lot of money. This is a significant advantage of Pyramid over other services
                    offering advertising or, for example, filling out surveys."
            />
            <Card
                expand={expand}
                setExpand={setExpand}
                icon={<MonetizationOnIcon className='icon' />}
                title="Other companies need us"
                description="Pyramid offers access to its own users who are difficult to reach through conventional methods. Our players
                    are young people who block Google ads. They are also not sensitive to Facebook ads. This is the reason why
                    Pyramid will be a great source of access to young people for other companies that care about this group."
                />
            <Card
                expand={expand}
                setExpand={setExpand}
                icon={<GradeIcon className='icon' />}
                title="Pyramid has a much higher quality of its services"
                description="The quality of service, and the efficiency and effectiveness behind it, is much higher than the competition.
                    This is due to the fact that players are rewarded for performing tasks. A person who fills out a survey for
                    our collaborator, pays much more attention to the questions he asks because he knows that if he wins the
                    game, his answers will be checked by one of our administrators. And if it turns out that a user is filling
                    out the survey incorrectly, his prize will be rejected and will be given to another person."
                    />
            <Card
                expand={expand}
                setExpand={setExpand}
                icon={<FlareIcon className='icon' />}
                title="Pyramid is something new and interesting"
                description="Pyramid is something completely new to the market. It allows you to compete with other people for money,
                    without any input from you. This is much more exciting and interesting for young people than previous ways
                    of earning money for people who are under age and do not have any capital accumulated. In addition Pyramid
                    is very pleasant to play. One game can be joined by a group of friends, who will compete with each other for
                    the prize."
                    />
          </div>
          {expand ? 
            <div className='descExpanded poppinsFont'>
                Description Expanded
            </div>
            :
            null}
        </article>

    )
}

export default ThirdElementLanding
