import React from 'react';
import Contador from './Contador'
import Botao from './Botao'
import LabelCronometro from './LabelCronometro'

class Cronometro extends React.Component {
  constructor(props){
    super(props);
    this.state={
      segundos: 0,
      minutos: 0,
      stop: false,
      nameStop: "Parar",
      name: "Cronomêtro", 
      parcial: ""
    };
  }
   zerarCronometro() {
      this.state.segundos = -1
      this.state.minutos = 0
      this.state.parcial = ""
   }
  
  parcial(){
    let p = this.state.minutos+ "m:"+ this.state.segundos + "\n\n"
    this.state.parcial = this.state.parcial+"\nP "+p+"s"
  }
  
  pararTempo(){
    this.setState({ 
        stop: !this.state.stop 
      })
    if (this.state.stop)
      this.state.nameStop = "Parar"
    else
      this.state.nameStop = "Continuar"
  }

  incrementar () {
    if (this.state.stop === false){
      this.setState(
         function (state, props) {
          if (state.segundos >= 5){
            this.zerar();
            this.incrementarMinuto(state);
          }  
          return({ segundos: state.segundos +1})
         })
    }
  }
  
  incrementarMinuto (state) {
    this.setState(() => { 
      return {minutos: state.minutos +1}
    })
  };
  
  zerar () {
    this.setState({ 
      segundos: 0 
    })
  }

  componentDidMount(){
    this.timer = setInterval(
      () => this.incrementar(), 1000)
  }
  

  render(){

    return (
      <div>
        <div class="container">
          <div class="justify-content-center d-flex mt-3">
            <LabelCronometro name={this.state.name} />
          </div>
          <div class="justify-content-center d-flex mb-2">
            <Contador minutos={this.state.minutos} segundos={this.state.segundos} />
          </div>
          <div class="justify-content-center d-flex mb-3">
            <Botao onClick={() => this.zerarCronometro()} label={"Zerar"} />
            <Botao onClick={() => this.pararTempo()} label={this.state.nameStop} />
            <Botao onClick={() => this.parcial()} label={"Parcial"} />
          </div>
          <div class="justify-content-center text-center">
            <LabelCronometro name={this.state.parcial} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
