import React from 'react';

import Button from '../../Button';
import Icon from '../../Icon';

import style from './style.module.scss';

export default function PlayerControls(props) {
  return <div className={style.wrap}>
    <Button
      className={style['player-button']}
      onClick={props.onPlayPrev}>
      <Icon type="prev"/>
    </Button>
    <Button
      className={style['player-button']}
      onClick={props.onTogglePlay}>
      {
        props.muted ?
          <Icon type="play"/> :
          <Icon type="stop"/>
      }
    </Button>
    <Button
      className={style['player-button']}
      onClick={props.onPlayNext}>
      <Icon type="next"/>
    </Button>
  </div>;
}
