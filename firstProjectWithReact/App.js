/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  Button,
  useColorScheme,
  View,
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
    flex: 1 ,
    justifyContent: 'center',
    padding: 20
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
            <Text>Username</Text>
            <TextInput
              defaultValue = {this.state.username}
              onChangeText = {text => this.setState({username: text})} 
            />

            <Text>Password</Text>
            <TextInput
              defaultValue = {this.state.password}
              onChangeText = {text => this.setState({password: text})}   
            />

            <Button title={"Hello"} onPress={this.buttonPressed} />
            
        </View>
    );
  }
}

//export default App;
