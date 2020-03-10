import React from 'react';

import Button from '../../Button';
import Icon from '../../Icon';
import PanelHole from '../../PanelHole';

import style from './style.module.scss';

export default function PlayerControls(props) {
  return <PanelHole
    contentLeft={<Button
      className={`${style['player-button']} ${style['prev']}`}
      onClick={props.onPlayPrev}>
      <Icon type="prev"/>
    </Button>}
    contentCenter={<Button
      className={`${style['player-button']} ${style['play']}`}
      onClick={props.onTogglePlay}>
      {
        props.muted ?
          <Icon type="play"/> :
          <Icon type="stop"/>
      }
    </Button>}
    contentRight={<Button
      className={`${style['player-button']} ${style['next']}`}
      onClick={props.onPlayNext}>
      <Icon type="next"/>
    </Button>}
  />;
}
