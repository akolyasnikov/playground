import React from 'react';

import style from './style.module.scss'

export default class TrackProgressBar extends React.PureComponent {
  constructor(props) {
    super(props);

    this.changeProgress = this.changeProgress.bind(this);
  }

  changeProgress(e) {
    if (!this.props.duration) {
      return;
    }

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const progress = x / rect.width;

    this.props.onProgressChange(this.props.duration * progress);
  }

  render() {
    const {duration, currentTime} = this.props;
    const width = currentTime * 100 / duration;

    return <div
      className={style.wrap}
      onClick={this.changeProgress}
    >
      {
        this.props.showPointer &&
          <>
            <div className={style.pointer} style={{left: `${width}%`}} />
            <div className={style.progress} style={{width: `${width}%`}} />
          </>
      }
    </div>;
  }
}
