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
  }
});

export default class App extends Component {
  constructor(){
    super()
    this.state = {}
    this.buttonPressed = this.buttonPressed.bind(this)
  }

  handleUsernameChanges(newText){
        console.log(`Username is ${newText}`)
  }

  handlePasswordChanges(newText){
    console.log(`Password is ${newText}`)
  }

  buttonPressed(){
    //TODO; get username and password
    console.log(this.state.username, this.state.password)
    //const username = this._username._lastNativeText
    //const password = this._password._lastNativeText
    //console.log(this._username, this._password)

  }


  render(){
    return (
        <View style = {styles.sectionContainer}>
            <View style = {styles.result}>
                <Text style ={styles.resultText}>11*11</Text>
            </View>
            <View style = {styles.calculation}>
                <Text style ={styles.calculationText}>121</Text>
            </View>
            <View style = {styles.buttons}>
                <View style={styles.numbers}>
                  <View style = {styles.row}>
                      <TouchableOpacity style = {styles.btn}>
                        <Text>0</Text>
                      </TouchableOpacity>

                      <TouchableOpacity style = {styles.btn}>
                        <Text>0</Text>
                      </TouchableOpacity>

                      <TouchableOpacity style = {styles.btn}>
                        <Text>0</Text>
                      </TouchableOpacity>
                  
                  </View>
                      
                  <View style = {styles.row}>
                      <TouchableOpacity style = {styles.btn}>
                        <Text>0</Text>
                      </TouchableOpacity>

                      <TouchableOpacity style = {styles.btn}>
                        <Text>0</Text>
                      </TouchableOpacity>
                      
                      <TouchableOpacity style = {styles.btn}>
                        <Text>0</Text>
                      </TouchableOpacity>
                  </View>


                  <View style = {styles.row}>
                      <TouchableOpacity style = {styles.btn}>
                        <Text>0</Text>
                      </TouchableOpacity>

                      <TouchableOpacity style = {styles.btn}>
                        <Text>0</Text>
                      </TouchableOpacity>
                      
                      <TouchableOpacity style = {styles.btn}>
                        <Text>0</Text>
                      </TouchableOpacity>
                  </View>

                  <View style = {styles.row}>
                      <TouchableOpacity style = {styles.btn}>
                        <Text>0</Text>
                      </TouchableOpacity>

                      <TouchableOpacity style = {styles.btn}>
                        <Text>0</Text>
                      </TouchableOpacity>
                      
                      <TouchableOpacity style = {styles.btn}>
                        <Text>0</Text>
                      </TouchableOpacity>

                  </View>
                </View>
                <View style={styles.operations}>
                      <TouchableOpacity style = {styles.btn}>
                        <Text>0</Text>
                      </TouchableOpacity>

                      <TouchableOpacity style = {styles.btn}>
                        <Text>0</Text>
                      </TouchableOpacity>
                      
                      <TouchableOpacity style = {styles.btn}>
                        <Text>0</Text>
                      </TouchableOpacity>
                </View>
            </View>
        </View>
    );
  }
}



//export default App;
