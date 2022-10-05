import React, { Component } from 'react';
import { View, Text ,StyleSheet, TouchableOpacity ,TextInput,Button} from 'react-native';



export default class Calculadora extends Component {
  constructor(props) {
    super(props);
    this.state = {
        num1:"",
        num2:"",
        resultado:"",
    };

    this.updateResultado = this.updateResultado.bind(this)
  }

  updateResultado = (r) => {
    this.setState({resultado:r})
  }

 
  render() {
    _this = this;
    const btnClick = (operador) => {
        var xhttp = new XMLHttpRequest()
        xhttp.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                response = xhttp.responseText;
                _this.updateResultado(response);
                
                
            }

        }

        xhttp.open("GET", "https://imnotame.000webhostapp.com/backEnd.php?num1="+this.state.num1+"&num2="+this.state.num2+"&operador="+operador ,true);
        xhttp.send();

    }


    return (
      <View style={styles.container} >
        <Text style={styles.title} > Calculadora </Text>

        <View>

        <TextInput style={styles.input} placeholder='Numero 1' keyboardType='number-pad' onChangeText={num1 => this.setState({num1})}>

        </TextInput >

        <TextInput style={styles.input} placeholder='Numero 2' keyboardType='number-pad' onChangeText={num2 => this.setState({num2})} >
            
        </TextInput>

        </View>
        
        <View style={styles.btns} >
          <TouchableOpacity style={styles.btn} onPress={() => { btnClick("1") }} title="+">
            <Text style={styles.btn.text}>+</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn}   onPress={() => { btnClick("2")}}>
            <Text style={styles.btn.text}>-</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={() => { btnClick("3")}}>
            <Text style={styles.btn.text}>*</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn}  onPress={() => { btnClick("4")}}>
            <Text style={styles.btn.text}>/</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn}   onPress={() => { btnClick("5")}} >
            <Text style={styles.btn.text}>^</Text>
          </TouchableOpacity>
          
        </View>

        <TextInput  style={styles.input} value={this.state.resultado} placeholder='Resultado' >
            
        </TextInput>


      </View>
    );
  }
}


const styles = StyleSheet.create({
    container:{
      display:'flex',
      flex:1,
      margin:20,
      
    },
    title:{
      paddingTop:10,
      paddingBottom:10,
      fontSize:40,
      textAlign:'center',
    },
    inputs:{
      
    },
    input:{
      borderWidth:2,
      marginBottom:15,
      marginTop:15,
      fontSize:25,
      
    },

    btns:{
      
      padding:10,
      flexDirection:"row",
      justifyContent:"space-evenly",
      flexWrap:"wrap"
     
    },

    btn:{
      alignItems:"center",
      borderRadius: 10,
      backgroundColor: "skyblue",
      width:50,
      height:50,
      marginBottom: 6,
      minWidth: "15%",
      text:{
        fontSize:35,
      },
      
      
     
    },
    
    
    
})