import React from 'react';
import MyButton from '../UI/MyButton/MyButton';
import classes from './Banner.module.scss';

import productsData from '../UI/productsData';

const Banner = () => {

  return (
    <div className={classes.Banner}>
      <div className={[classes.Container, 'container'].join(' ')}>

        <div className={[classes.Left, classes.TextContainer].join(' ')}>
          <h1 className={classes.Title}>Buy Our Best Products From All Around The World</h1>

          <p className={classes.Details}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sunt, architecto atque minus eligendi optio cumque dolores et reprehenderit ea tempore unde odio tempora ipsam?</p>

          <div className={classes.Buttons}>
            <MyButton round style={{ marginRight: '1rem' }}>Products</MyButton>
            <MyButton round outline>Signup</MyButton>
          </div>
        </div>

        <div className={[classes.Right, classes.ImageContainer].join(' ')}>
          <img src={productsData.products[0].src} alt=""/>
        </div>

      </div>
    </div>
  );
}

export default Banner;