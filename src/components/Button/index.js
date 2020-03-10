import React from 'react';

export default function Button(props) {
  return <button
    className={props.className}
    type="button"
    onClick={props.onClick}>
    {props.children}
  </button>;
};
