import React, { Component } from 'react';

import { View, 
  StyleSheet, 
  TouchableOpacity, 
  Text, 
  TextInput,
  Picker 
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import Navbar from '../../components/Navbar.android';

export default class NewTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentCategory: 'query'
    };
  }

  _navigate(route) {
    this.props.navigator.push({
      id: 'new-todo'
    })
  }

  _navigateBack() {
    this.props.navigator.pop();
  }
  render() {
    return (
      <View style={styles.container}>
        <Navbar title={this.props.title} onLeftPress={() => this._navigateBack()} />
        <View style={styles.form}>
          <Picker
            selectedValue={this.state.currentCategory}
            mode='dropdown'
            onValueChange={(cateogry) => this.setState({
              currentCategory: cateogry
            })}>
            <Picker.Item label='Query' value='query' />
            <Picker.Item label='Task' value='task' />
          </Picker>
          <TextInput>This is</TextInput>
          <TextInput>This is</TextInput>
        </View>
      </View>
    );
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  form: {
    top:54,
    justifyContent: 'center',
    alignItems: 'center'
  }


});