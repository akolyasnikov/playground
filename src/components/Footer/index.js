import React from 'react';
import Player from '../Player';
import Icon from '../Icon';
import PanelHole from '../PanelHole';

import style from './style.module.scss';
import Button from '../Button';

export default class Footer extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {playerVisible: false};

    ['togglePlayer', 'onTogglePlay'].forEach(method => {
       this[method] = this[method].bind(this);
    });
  }

  togglePlayer() {
    this.setState({ playerVisible: !this.state.playerVisible })
  }

  onTogglePlay(isMuted) {
    if (isMuted) {
      this.setState({ playerVisible: false })
    }
  }

  getLeftSideButtons() {
    return <div className={style['menu-block']}>
      <Icon type="home" className={style['menu-icon']}/>
      <Icon type="tv" className={style['menu-icon']}/>
    </div>;
  }

  getRightSideButtons() {
    return <div className={style['menu-block']}>
      <Icon type="radio" className={style['menu-icon']}/>
      <Icon type="bell" className={style['menu-icon']}/>
    </div>;
  }

  getTogglePlayerButton() {
    return <Button
      className={style['toggle-player']}
      onClick={this.togglePlayer}>
      <Icon type="discover" className={style['discover-icon']}/>
    </Button>;
  }

  render() {
    return <div
      className={`${style.footer} ${this.state.playerVisible ? style['tall'] : ''}`}>
      <div className={`${style['panel-wrap']} ${this.state.playerVisible ? style['panel-hidden'] : ''}`}>
        <PanelHole
          contentLeft={this.getLeftSideButtons()}
          contentCenter={this.getTogglePlayerButton()}
          contentRight={this.getRightSideButtons()}
        />
      </div>
      <div className={`${style['player-wrap']} ${this.state.playerVisible ? '' : style['player-hidden']}`}>
        {
          <Player
            playlist={this.props.playlist}
            onTogglePlay={this.onTogglePlay}
            autoplay={this.state.playerVisible}
          />
        }
      </div>
    </div>;
  }
}
