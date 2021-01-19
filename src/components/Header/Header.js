import React from 'react';
import classes from './Header.module.scss';

const navItems = [
  { name: 'Mens' },
  { name: 'Womens' },
  { name: 'Sports' },
  { name: 'Games' },
  { name: 'Kids' },
  { name: 'Brands' },
];

const Header = () => {
  return (
    <div className={classes.Header}>
      <div className={[classes.Container, 'container'].join(' ')}>

        <div className={classes.LogoContainer}>
          <h1 className={classes.Logo}>BigStore</h1>
        </div>

        <nav className={classes.Navbar}>
          <ul className={classes.List}>
            {navItems.map((item, i) => (
              <li className={classes.Item} key={i}>{item.name}</li>
            ))}
          </ul>
        </nav>

        <div className={classes.Buttons}>
          <button className={classes.CartBtn}>[^]</button>
        </div>

      </div>
    </div>
  );
}

export default Header;