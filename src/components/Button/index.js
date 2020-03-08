import React from 'react';

export default function Button(props) {
  // todo aria-label

  return <button
    className={props.className}
    type="button"
    onClick={props.onClick}>
    {props.children}
  </button>;
};
