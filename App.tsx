import React, { Component } from "react";
import { View, Text, SafeAreaView, Image, Button, StyleSheet, Alert,TextInput, TouchableOpacity } from "react-native";
// View somente para agrupar outras coisas

class App extends Component {

  constructor(props) {

    super(props);

    this.state = {
        contador: 0,
        textoPrimeiroBotao: "Iniciar",
        guardaValor: 0,
        pararDesabilitado: true

    };

    this.iniciou = null;

    this.iniciar = this.iniciar.bind(this);

    this.parar = this.parar.bind(this)

  }

  iniciar() {
    if (this.iniciou != null) {
        clearInterval(this.iniciou),
        this.iniciou = null,
        this.setState({
            textoPrimeiroBotao: "Voltar",
            pararDesabilitado: false
        })

    } else { //começa null, começa pelo else
    this.iniciou = setInterval(()=>{
        this.setState({
            contador: this.state.contador + 0.01,
            
        })
    }, 10);
    this.setState({
        textoPrimeiroBotao: "Pausar",

        pararDesabilitado: false
    })}

  }

  parar(){

    

    clearInterval(this.iniciou);
    this.iniciou = null;
    this.setState({
        guardaValor: this.state.contador,
        contador: 0,
        textoPrimeiroBotao: "Iniciar",
        pararDesabilitado: true
    })
  };


    render(){
        return(
           <SafeAreaView style={estilos.fundoPadrao}>
            <Text style={estilos.tituloApp}>Cronômetro</Text>

            <Image style={estilos.imagem}source={require("./src/cronometro.png")}></Image>
            <Text style={estilos.contador}>{this.state.contador.toFixed(2)}</Text>


            <View style={estilos.botoes}>
                <TouchableOpacity onPress={this.iniciar} style={estilos.botao}>
                    <Text>{this.state.textoPrimeiroBotao}</Text>
                </TouchableOpacity>

                <TouchableOpacity disabled={this.state.pararDesabilitado} onPress={this.parar} style={estilos.botao}>
                    <Text>Parar</Text>
                </TouchableOpacity>
            </View>
            <Text style={estilos.ultima}>

                {this.state.guardaValor > 0 ? "Última contagem: " +  this.state.guardaValor.toFixed(2) : ""}
                
                
                
                </Text>
           </SafeAreaView>
        )
    }
}


const estilos = StyleSheet.create({
   fundoPadrao: {
    flex: 1,
    backgroundColor: "darkblue",
    justifyContent: "center",
    alignItems: "center",
   },
   tituloApp: {
    color: "white",
    fontSize: 24
   },
   contador: {
    marginTop: -145,
    fontSize: 36,
    color: "white",
    margin: 10
   },
   botao: {
    backgroundColor: "white",
    margin: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    width: 100 
   },
   botoes: {
marginTop: 80,
   flexDirection: "row",
   marginBottom: 10
    },
    ultima:{
        color: "white"
    },
    imagem: {
        width: 300,
        height: 300
    }

})


export default App;