import React from 'react';
import Player from './components/Player';
import style from './style.module.scss';

const TRACKS_FOLDER = '/tracks';
const TRACKS = [
  'Gnawledge - Menudo Jaleo',
  'Gnawledge - Yerbaguena',
  'Mid Air Machine - Four Corners'
];

function App () {
  return <div>
    <Player
      playlist={TRACKS}
      tracksFolder={TRACKS_FOLDER}
    />
  </div>;
}
export default App;
