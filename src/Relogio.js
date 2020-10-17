import React from 'react'
import LabelRelogio from './LabelRelogio'

class Relogio extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            relogio: "",
			name: "Relógio Local"
        }
    }

	atualizaRelogio(){
		var moment = require('moment-timezone')
		let localTime = moment( ).tz("America/Bahia").format('HH:mm:ss').toString()
		this.setState({relogio: "Feira de Santana, Bahia: "+localTime}) 
	}
	
	componentDidMount(){
        this.relogio = setInterval( () => this.atualizaRelogio(),1000)
    }

    render(){
        return (
			<div class="mb-4 justify-content-center">
				<div class="mt-3 mb-5 text-center">
					<LabelRelogio name={this.state.name} />
					<h3 class="mt-4">{this.state.relogio}</h3>
				</div>
            </div>
        )
    }
}

export default Relogio