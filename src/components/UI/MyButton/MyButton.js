import React from 'react';
import classes from './MyButton.module.scss';

const MyButton = ({ round, outline, clicked, className, style, children }) => {
  const rootClass = [classes.MyButton];
  if (className) rootClass.push(className);

  if (round) rootClass.push(classes.Round);
  else rootClass.push(classes.Default);

  if (outline) rootClass.push(classes.Outline);

  return (
    <button className={rootClass.join(' ')} style={style ? style:{}} onClick={() => {
      console.log('C LOG');
      clicked();
    }}>
      {children}
    </button>
  );
}

export default MyButton;