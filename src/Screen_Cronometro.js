import React from 'react';
import './App.css';
import {Navbar, Nav} from 'react-bootstrap';

function Screen_Cronometro(){
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
		<Cronometro/>
    </div>
  );
}

export default Screen_Cronometro;
