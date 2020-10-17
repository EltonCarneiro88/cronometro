import React from 'react';
import './App.css';
import Relogio from './Relogio';
import {Navbar, Nav} from 'react-bootstrap';

function Screen_Relogio(){
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
		<Relogio/>
    </div>
  );
}

export default Screen_Relogio;
