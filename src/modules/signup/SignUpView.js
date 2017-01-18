import React, { Component } from 'react';

import { View, 
  StyleSheet, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  Button 
} from 'react-native';

import * as FirebaseAuth from '../../services/firebase.auth';
import Toast from '@remobile/react-native-toast';

export default class SignupView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

  /*
  @def: onPressLogin()
  */
  onPressLogin = () => {
    this.props.navigator.push({
      id: 'signin'
    })
  };

  /*
    @def: validateEmail()
  */
  validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };
  /*
  @def: onSubmit()
  */
  onSubmit = () => {
    if ( !this.validateEmail(this.state.email) ) {
      // not a valid email
      Toast.show(null, "Invalid email address");
      return;

    } else if (this.state.password.length <= 6) {
      Toast.show(null, "Password must contain atleast 6 characters");
      return;

    } else if (this.state.password !== this.state.confirmPassword) {
      Toast.show(null, "Passwords did not match");
      return;

    } else {
      // valid email
      FirebaseAuth.signup(this.state.email, this.state.password)
        .then(user => {
          console.log(user);
          Toast.show(null, 'Successfully registered');
          this.props.navigator.push({
            id: 'signin'
          });
        })
        .catch(e => Toast.show(null, 'The combination did not match our records, please try again'));
    }
  };

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.userInput}>
          <TextInput placeholder='Name' onChangeText={(name) => this.setState({ name }) }
            value={this.state.name} returnKeyType="next"/>
          <TextInput placeholder='Email' keyboardType='email-address' returnKeyType="next"
            autoCapitalize={'none'} autoCorrect={false} onChangeText={(email) => this.setState({ email })}
            value={this.state.email} />
          <TextInput placeholder='Password' secureTextEntry={true} onChangeText={(password) => this.setState({ password })}
            value={this.state.password} />
          <TextInput placeholder='Confirm Password' secureTextEntry={true} onChangeText={(confirmPassword) => this.setState({ confirmPassword })}
            value={this.state.confirmPassword} />
        </View>

          <View style={styles.signupBtn}>
            <Button title="Sign up" color="#841584"
              onPress={() => this.onSubmit()} />
          </View>
          <View style={styles.loginBtn}>
            <TouchableOpacity onPress={ () => this.onPressLogin()}>
              <Text>Login</Text>
            </TouchableOpacity>
          </View>

        
      </View>
    );
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  userInput: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20
  },
  signupBtn: {
    marginTop: 10,
    marginLeft: 30,
    marginRight: 30
  },
  loginBtn: {
    marginTop: 20,
    marginLeft: 30,
    marginRight: 30,
    alignSelf: 'flex-end'
    
  }

});