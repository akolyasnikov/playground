import React from 'react';

export default React.forwardRef(function Audio(props, ref) {
  return <audio ref={ref}>
    <source src={props.src} type="audio/mpeg" />
    <div>Your browser doesn't support HTML5 audio. Here is a <a href={props.src}>link to the audio</a> instead.</div>
  </audio>;
})
