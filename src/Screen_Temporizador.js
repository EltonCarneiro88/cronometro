import React from 'react';
import './App.css';
import Temporizador from './Temporizador';
import {Navbar, Nav} from 'react-bootstrap';

function Screen_Temporizador(){
  return (
    <div>
		<Navbar bg="primary" variant="dark">
			<Navbar.Brand href="/">Cronômetro Online</Navbar.Brand>
			<Nav className="mr-auto">
				<Nav.Link href="/">Cronômetro</Nav.Link>
				<Nav.Link href="/relogio">Relógio</Nav.Link>
				<Nav.Link href="/temporizador">Temporizador</Nav.Link>
			</Nav>
		</Navbar>
		<div>
			<Temporizador/>
		</div>
    </div>
  );
}

export default Screen_Temporizador;
