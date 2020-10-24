import React, {Component} from 'react';
import {View, Button, TextInput, Text} from 'react-native';

class App extends Component {
  state = {n1: '', n2: '', resultado: 0};
  
  limpaCampos() {
    this.setState({n1: '', n2: ''});
  }

  valida(n1, n2) {
    if (n1 === '' || n2 === '') {
      return false;
    }else{
      return true;
    }
  }

  soma() {
    if (this.valida(this.state.n1, this.state.n2)) {
      this.setState({
        resultado: parseInt(this.state.n1) + parseInt(this.state.n2),
      });
      this.limpaCampos();
      return;
    }else{
      alert('Informe os valores');
    }
  }
  sub() {
    if (this.valida(this.state.n1, this.state.n2)) {
      this.setState({
        resultado: parseInt(this.state.n1) - parseInt(this.state.n2),
      });
      this.limpaCampos();
      return;
    }else{
      alert('Informe os valores Corretamente');
    }
  }
  mult() {
    if (this.valida(this.state.n1, this.state.n2)) {
      this.setState({
        resultado: parseInt(this.state.n1) * parseInt(this.state.n2),
      });
      this.limpaCampos();
      return;
    }else{
      alert('Informe os valores Corretamente');
    }
  }
  div() {
    if (this.valida(this.state.n1, this.state.n2)) {
      this.setState({
        resultado: parseInt(this.state.n1) / parseInt(this.state.n2),
      });
      this.limpaCampos();
      return;
    }else{
      alert('Informe os valores Corretamente');
    }
  }

  render() {
    return (
      <View>
        <TextInput
          placeholder="Digite o primeiro valor"
          onChangeText={(text) => this.setState({n1: text})}
          keyboardType="numeric"
          value={this.state.n1}
        />
        <TextInput
          placeholder="Digite o segundo valor"
          onChangeText={(text) => this.setState({n2: text})}
          keyboardType="numeric"
          value={this.state.n2}
        />
        <Button 
          color="blue" 
          onPress={this.soma.bind(this)} 
          title="Soma (+)" 
        />
        <Button 
          color="blue" 
          onPress={this.sub.bind(this)} 
          title="Subtração (-)" 
        />
        <Button 
          color="blue" 
          onPress={this.mult.bind(this)} 
          title="Multiplicação (*)" 
        />
        <Button 
          color="blue" 
          onPress={this.div.bind(this)} 
          title="Divisão (/)" 
        />
        <Text>
          Resultado: {this.state.resultado}
        </Text>
      </View>
    );
  }
}
export default App;