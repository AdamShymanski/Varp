import React, { useRef } from "react";
import { SideDrawer, Card } from "@pyramid/ui";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Theme } from "@material-ui/core";

const useStyles = makeStyles<Theme>({
  container: {
    display: "flex",
    backgroundColor: "#1B1B1B"
  },
  sideBar: {
    height: "100%",
    position: "fixed",
    zIndex: 1,
    top: 0,
    left: 0,
    overflowX: "hidden"
  },
  cardContainer: (props) => ({
    marginLeft: "327px"
  })
});

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

const MainPage = () => {
  const sideBarRef = useRef<HTMLDivElement>(null);
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.sideBar}>
        <SideDrawer  {...props} />
      </div>
      <Grid container spacing={4} className={classes.cardContainer}>
        {new Array(10).fill(10).map(value => (
          <Grid xs={12} sm={6} md={4} key={value} item>
            <Card {...props} />
          </Grid>
        ))}
      </Grid>
      <div></div>
    </div>
  );
};

export default MainPage;
