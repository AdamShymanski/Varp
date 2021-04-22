import React, { ReactComponentElement, useState } from "react";
import { SideDrawer, Card } from "@varp/ui";

import "./../sass/MainPage-style.scss";

const props = {
  header: {
    title: "Card Title",
    thumbnail: "https://placehold.co/65x65/orange/white"
  },
  details: {
    minutes: 15,
    type: "Watching video ad",
    reward: 150
  },
  description: {
    children: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Nam repellendus similique ab, ad sint labore voluptatibus doloribus aliquam aperiam a, 
                accusamus dolorem odio quis quod id, cupiditate vero sapiente est.`
  },
  actionBar: {
    status: "Start"
  },
  bottom: {
    referralCode: "HDI92DN"
  },
  gameCard: {
    title: "End It Fast",
    date: "April 2nd",
    time: "2:30pm",
    price: 500,
    reward: 214
  },
  top: {
    name: "Adam Szymanski",
    balance: 451,
    number: 51,
    profit: false
  }
};

const cardsHandler = (object: {}) => {
  //number of cards
  const number = Object.keys(object);

  return <Card {...props} />;
};

function MainPage() {
  return (
    <div className="mpWrapper">
      <SideDrawer {...props} />
      <div className="cardsContainer">
        <Card {...props} />
      </div>
    </div>
  );
}

export default MainPage;
