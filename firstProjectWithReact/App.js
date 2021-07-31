/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import type {Node} from 'react';
import { //declare the data type
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  Button,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1 
  },
  resultText:{
    fontSize: 20 ,
    color: 'black',
    
  },
  calculationText:{
    fontSize: 50,
    color: 'black'
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  container: {
    flex: 1
  }, 
  result: {
    flex : 1 , 
    backgroundColor: 'cyan',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  calculation: {
    flex: 1 ,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  buttons: {
    flex: 4 ,

    flexDirection: 'row'
  },
  numbers:{
    flex: 3,
    backgroundColor: 'brown'
  },
  operations:{
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: 'black'
  },
  row: {
    flexDirection: "row",
    flex: 1,
    justifyContent: 'space-around',

    alignItems: 'center'
  }, 
  btn:{
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  btnText:{
    fontSize: 30,
  },
  white: {
    color: 'white', 
    fontSize: 35
  } 
});

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      resultText : " ",
      calculationText : " "
    }
    //this.buttonPressed = this.buttonPressed.bind(this)
    this.operations = ['DEL','+','-','*','/'];
  }

  handleUsernameChanges(newText){
        console.log(`Username is ${newText}`)
  }

  handlePasswordChanges(newText){
    console.log(`Password is ${newText}`)
  }


  calculateResult(){
    const text = this.state.resultText 
    //now parse this text 3+3*6^5/2+7 to an array
    //brackets --> of --> division --> mul --> add/minus
    //eval(text)
    this.setState({
      calculationText: eval(text)
      
    })

  }

  validate(){
    const text = this.state.resultText 
    switch(text.slice(-1)){
      case '+':
      case '-':
      case '*':
      case '/':
        return false //avoid crash from some cases like 22+, 22-

    }
    return true 
  }

  buttonPressed(text){
      console.log(text);

      if (text == '='){
        return this.validate() && this.calculateResult()
      }

      this.setState({
        resultText:   this.state.resultText + text, 
        
      })
  }

  operate(operation){
    switch(operation){
      case 'DEL':
        const text = this.state.resultText.split(''); 
        text.pop()
        text.join('')
        this.setState({
          resultText: text.join('')
        })
        break
      
      case '+':
      case '-':
      case '*':
      case '/':
        const lastChar = this.state.resultText.split('').pop()

        if (this.operations.indexOf(lastChar) > 0) return  // if last character is an operation and user continue to press another ope, return nothing

        if (this.state.text == "" ) return 
        this.setState ({
          resultText: this.state.resultText + operation 
        })
    }
  }

  render(){
    let rows = [];
    let nums = [[1,2,3],[4,5,6],[7,8,9],['.',0,'=']]
    for(let i = 0; i< 4; i++){
      let row = []
      
      for (let j = 0;j < 3 ; j++){
          row.push(<TouchableOpacity onPress={() => this.buttonPressed(nums[i][j])} style = {styles.btn}>
                      <Text style = {styles.btnText}>{nums[i][j]}</Text>
                </TouchableOpacity>)
      }
      rows.push(<View style ={styles.row}>{row}</View>)
    }

    
    let ops = [];
    for (let i = 0 ; i < 5;i++){
        ops.push(<TouchableOpacity style = {styles.btn} onPress={()=>this.operate(this.operations[i])}>
          <Text style = {styles.btnText , styles.white}>{this.operations[i]}</Text>
    </TouchableOpacity>)
    }


    return (
        <View style = {styles.sectionContainer}>
            <View style = {styles.result}>
                <Text style ={styles.resultText}>{this.state.resultText}</Text>
            </View>

            <View style = {styles.calculation}>
                <Text style ={styles.calculationText}>{this.state.calculationText}</Text>
            </View>

            <View style = {styles.buttons}>
                <View style={styles.numbers}>
                 {rows}
                </View>
                <View style={styles.operations}>
                      {ops}
                </View>
            </View>
        </View>
    );
  }
}



//export default App;
