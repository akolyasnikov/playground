import React from 'react';
import Footer from './components/Footer';
import style from './style.module.scss';

const TRACKS_FOLDER = '/tracks';
const TRACKS = [
  'Gnawledge - Menudo Jaleo',
  'Gnawledge - Yerbaguena',
  'Mid Air Machine - Four Corners'
];

function App () {
  return <div>
    <div className={style.content}>
      content
    </div>
    <Footer
      playlist={TRACKS.map(name => ({ name: name, path: `${TRACKS_FOLDER}/${name}.mp3` }))}
    />
  </div>;
}
export default App;
