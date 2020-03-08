import React from 'react';
import Player from '../Player';

import style from './style.module.scss';


export default class Footer extends React.PureComponent {
  render() {
    return <div>
      <div>
        wanderPanel
      </div>
      <Player
        playlist={this.props.playlist}
      />
    </div>;
  }
}
