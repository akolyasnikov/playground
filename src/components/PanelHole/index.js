import React from 'react';

import Hole from './Hole';

import style from './style.module.scss';

export default function PanelHole(props) {
  return <div className={style.wrap}>
    <div className={style.left}>
      {props.contentLeft}
    </div>
    <div className={style.center}>
      {props.contentCenter}
      <div className={style['hole-wrap']}>
        <Hole/>
      </div>
    </div>
    <div className={style.right}>
      {props.contentRight}
    </div>
  </div>;
}
