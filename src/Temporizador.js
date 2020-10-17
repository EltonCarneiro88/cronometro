import React from 'react'
import Botao from './Botao'
import LabelTemporizador from './LabelTemporizador'

class Temporizador extends React.Component{

	constructor(props){
		super(props)
		this.state = {
            segundos: 0,
            minutos: 0,
            isOn: false,
            status: "Parado",
            label: "Iniciar",
			name: "Temporizador"
        }
		this.handleInputChange = this.handleInputChange.bind(this);
    }
	
	handleInputChange(event) {
		const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
			[name]: value
        });
      }

	toggle(){
        if(this.state.isOn===true) {
			this.setState({isOn: false, status: "Parado", label: "Iniciar"})
        }
        else {
			this.setState({isOn: true, status: "Iniciado", label: "Parar"})
        }
    }
	
	decrementarMinutos(){
        this.setState({minutos: this.state.minutos -1})
    }
	
	reiniciarSegundos(){
        this.setState({segundos: 59})
    }
	
	decrementarSegundos(){
        this.setState (
            (state) => {
                if(this.state.isOn===true){
					if(state.segundos <= 0 && state.minutos>0){
						this.reiniciarSegundos()
						this.decrementarMinutos()
					} else if(state.segundos <= 1 && state.minutos === 0){
						this.toggle()
						return({segundos: 0})
					}
					return({segundos: state.segundos - 1})
				}
            }
        )
    }

    componentDidMount(){
        this.timer = setInterval( () => this.decrementarSegundos(),1000)
    }

    render(){
		const {isOn} = this.state;
        return(
            <div>
				<div class="justify-content-center d-flex mt-3">
					<LabelTemporizador name={this.state.name} />
				</div>
				<div class="justify-content-center d-flex">
					<h1 class="mb-3">{this.state.minutos}:{this.state.segundos}</h1>
				</div>
				{isOn
				?null
				:
					<div class="text-center mb-3">
						<h3 class="mb-4">Informe o tempo</h3>
						<form>
							<label>Minutos:
								<input type="number" name="minutos" onChange={this.handleInputChange} />
							</label>
							<div>
							</div>
							<label>Segundos:
								<input type="number" name="segundos" onChange={this.handleInputChange} />
							</label>
						</form>
					</div>
				}
				<div class="justify-content-center d-flex">
					<Botao onClick={()=> this.toggle()} label={this.state.label} />
				</div>
			</div>
		)
    }
}

export default Temporizador