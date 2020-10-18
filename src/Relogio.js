import React from 'react'
import LabelRelogio from './LabelRelogio'
import {Card} from 'react-bootstrap';
import {ListGroup} from 'react-bootstrap';

class Relogio extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            relogio1: "",
			relogio2: "",
            relogio3: "",
			relogio4: "",
			name: "Relógio Local"
        }
    }

	atualizaRelogio(){
		var moment = require('moment-timezone')
		
		let localTime = moment( ).tz("America/Bahia").format('HH:mm:ss').toString()
		this.setState({relogio1: "Feira de Santana, Bahia: "+localTime})
		
		localTime = moment( ).tz("Asia/Tokyo").format('HH:mm:ss').toString()
		this.setState({relogio2: "Tóquio, Japão (+12h): "+localTime})
		
		localTime = moment( ).tz("Europe/Paris").format('HH:mm:ss').toString()
		this.setState({relogio3: "França, Paris (+5h): "+localTime})

		localTime = moment( ).tz("America/Denver").format('HH:mm:ss').toString()
		this.setState({relogio4: "Denver, EUA (-3h): "+localTime})
	}
	
	componentDidMount(){
        this.relogio = setInterval( () => this.atualizaRelogio(),1000)
    }

    render(){
        return (
			<div class="mb-4 justify-content-center d-flex">
				<div class="mt-3 mb-5 text-center">
					<LabelRelogio name={this.state.name} />
					<h3 class="mt-4 mb-5">{this.state.relogio1}</h3>
					<div>
						<Card className="text-center" border="primary">
							<Card.Header class="bg-primary text-white">
								<h2>Outros Locais</h2>
							</Card.Header>
							<ListGroup variant="flush">
								<ListGroup.Item><h3>{this.state.relogio2}</h3></ListGroup.Item>
								<ListGroup.Item><h3>{this.state.relogio3}</h3></ListGroup.Item>
								<ListGroup.Item><h3>{this.state.relogio4}</h3></ListGroup.Item>
							</ListGroup>
						</Card>
					</div>
				</div>
            </div>
        )
    }
}

export default Relogio