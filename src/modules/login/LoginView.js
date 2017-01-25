'use strict';

import React, { Component } from 'react';
import { 
  View, 
  TextInput, 
  Text,
  Image, 
  TouchableHighlight, 
  StyleSheet, 
  Button, 
  TouchableOpacity 
} from 'react-native';

import * as FirebaseAuth from '../../services/firebase.auth';
import * as Toast from '../../services/toast';



export default class LoginView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email : '',
      password: ''
    };
  }
  
  validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  onSubmit = () => {
    if ( !this.validateEmail(this.state.email) ) {
      // not a valid email
      //Toast.show(null, "Invalid email address");
      Toast.show('Invalid email address')
      return;
    } else if (this.state.password.length <= 6) {
      Toast.show('Password must contain atleast 6 characters');
      
    } else {
      // valid email
      FirebaseAuth.signin(this.state.email, this.state.password)
        .then(user => {
          console.log(user);
          Toast.show('Successfully Logged in');
          this.setState({
            email: '',
            password: ''
          })
          this.props.navigator.push({
            id: 'todo-list'
          });
        })
        .catch(e => Toast.show('The combination did not match our records, please try again'));
    }
  };

  /*
  @onPressSignup
  */
  onPressSignup = () => {
    this.props.navigator.push({
      id: 'signup'
    })
  };

  //render method of the component
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require('../../../images/logo-icon.png')} />
        </View>
        <View style={styles.loginForm}>
          <View style={styles.userInput}>
            <TextInput placeholder='Email' keyboardType='email-address' returnKeyType="next"
              autoCapitalize={'none'} autoCorrect={false} onChangeText={(email) => this.setState({ email })}
              value={this.state.email} />
            <TextInput placeholder='Password' secureTextEntry={true} onChangeText={(password) => this.setState({ password })}
              value={this.state.password} />
          </View>

          <View style={styles.loginBtn}>
            <Button title="Log in" color="#4ad5c2"
              onPress={() => this.onSubmit()} />
          </View>
          <View style={styles.signupBtn}>
            <TouchableOpacity onPress={() => this.onPressSignup()}>
              <Text>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>


      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#545162'
  },
  logoContainer: {
    flex:1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  logo: {
    height: 100,
    width: 100
  },
  loginForm: {
    flex: 1.5
  },
  userInput: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20
  },
  loginBtn: {
    marginTop: 10,
    marginLeft: 30,
    marginRight: 30
  },
  signupBtn: {
    marginTop: 20,
    marginLeft: 30,
    marginRight: 30,
    alignSelf: 'flex-end'

  }

});