import React, { Component } from 'react';

import { View, 
  StyleSheet, 
  TouchableOpacity, 
  Text, 
  TextInput,
  Picker 
} from 'react-native';

import { FileUpload } from 'NativeModules';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from 'apsl-react-native-button';
import * as _ from 'lodash';

import * as FirebaseDb from '../../services/firebase.database';
import * as FirebaseAuth from '../../services/firebase.auth';

import Navbar from '../../components/Navbar.android';

export default class FileUploadView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: 'query',
      title: '',
      assignor: '',
      assignee: 'user1',
      description: '',
      users: []
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




  componentDidMount() {
    var obj = {
      uploadUrl: 'http://192.168.0.106:3000/api/v1/posts',
      method: 'POST',
      headers: {
          'Accept': 'application/json'
        },
      fields: {
            'userId': '507f1f77bcf86cd799439011',
            'title': 'This is awesome',
            'type': '0'
        },
        files: [
          {
            name: 'one', // optional, if none then `filename` is used instead
            filename: 'ic_menu_black_48dp_1x.png', // require, file name
            filepath: '/home/hkhan/Public/Dev/todo-react-native/images/ic_menu_black_48dp_1x.png', // require, file absoluete path
            //filetype: 'audio/x-m4a', // options, if none, will get mimetype from `filepath` extension
          },
        ]
    };

    FileUpload.upload(obj, function(err, result) {
     
      console.log('upload:', err, result);
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> {this.props.title} </Text>
      </View>
    );
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  addBtn: {
    margin: 10,
    backgroundColor: '#4682B4'
  },
  btnText: {
    color: 'white'
  }
  


});