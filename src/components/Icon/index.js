import React from 'react';
import sprite from './img/sprite.svg';
import style from './style.module.scss';

export default function Icon(props) {
  return <svg xmlns="http://www.w3.org/2000/svg" className={style.icon}>
    <use xlinkHref={`${sprite}#${props.type}`} />
  </svg>;
}
