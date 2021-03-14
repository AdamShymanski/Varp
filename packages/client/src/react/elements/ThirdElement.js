import React from "react";
import "./../../sass/elements/ThirdElement-style.scss";

export default function FourthElement(props) {
  return (
    <section className={`wrapper-2 ${props.visible ? "visible" : "notVisible"}`}>
      <section>
        <div className='card c0'>
          <h1>1. The power of our users</h1>
          <p>
            Our users can perform much more demanding tasks than users of, say, YouTube. This is due to the rewards they
            can receive for completing these tasks. YouTube can only offer to watch another video, while Pyramid offers
            players the chance to win a lot of money. This is a significant advantage of Pyramid over other services
            offering advertising or, for example, filling out surveys.
          </p>
        </div>
        <div className='card c1'>
          <h1>2. Other companies need us</h1>
          <p>
            Pyramid offers access to its own users who are difficult to reach through conventional methods. Our players
            are young people who block Google ads. They are also not sensitive to Facebook ads. This is the reason why
            Pyramid will be a great source of access to young people for other companies that care about this group.
          </p>
        </div>
        <div className='card c2'>
          <h1>3. Pyramid has a much higher quality of its services</h1>
          <p>
            The quality of service, and the efficiency and effectiveness behind it, is much higher than the competition.
            This is due to the fact that players are rewarded for performing tasks. A person who fills out a survey for
            our collaborator, pays much more attention to the questions he asks because he knows that if he wins the
            game, his answers will be checked by one of our administrators. And if it turns out that a user is filling
            out the survey incorrectly, his prize will be rejected and will be given to another person.
          </p>
        </div>
        <div className='card c3'>
          <h1>4. Pyramid is something new and interesting</h1>
          <p>
            Pyramid is something completely new to the market. It allows you to compete with other people for money,
            without any input from you. This is much more exciting and interesting for young people than previous ways
            of earning money for people who are under age and do not have any capital accumulated. In addition Pyramid
            is very pleasant to play. One game can be joined by a group of friends, who will compete with each other for
            the prize.
          </p>
        </div>
      </section>
    </section>
  );
}
