import React from 'react';
import Button from 'react-bootstrap/Button';

const Botao = (props) => (
  <Button onClick={props.onClick} class={props.class} variant={props.variant}>{props.label}</Button>
  )

export default Botao