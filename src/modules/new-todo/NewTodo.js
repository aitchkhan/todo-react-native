import React, { Component } from 'react';

import { View, 
  StyleSheet, 
  TouchableOpacity, 
  Text, 
  TextInput,
  Picker 
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import Button from 'apsl-react-native-button';
import * as _ from 'lodash';

import * as FirebaseDb from '../../services/firebase.database';
import * as FirebaseAuth from '../../services/firebase.auth';

import Navbar from '../../components/Navbar.android';

export default class NewTodo extends Component {
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

  _onSubmit() {
    const user = FirebaseAuth.getCurrentUser();

    let assignment = {
      type: '',
      title: '',
      assignor: '',
      assignee: '',
      description: ''
    };
    
    let assignmentClone = _.clone(assignment);

    assignmentClone.type = this.state.type;
    assignmentClone.assignee = this.state.assignee;
    assignmentClone.assignor = user.email;
    assignmentClone.description = this.state.description;
    assignmentClone.title = this.state.title;
    
    assignment = assignmentClone;

    FirebaseDb.addAssignment(assignment);

    console.log(assignment);
    this.setState({
      title: '',
      description: '',
      type: 'query',
      assignee: 'user1'
    });
  }


  componentDidMount() {
    let tempUsers = [];
    FirebaseDb.findAllUsers()
      .then(snap => snap.forEach(childSnap => {
        tempUsers.push(childSnap.val());
      }))
      .then(() => {
        this.setState({
          users: tempUsers
        });
        console.log(this.state.users);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Navbar title={this.props.title} onLeftPress={() => this._navigateBack()} />
        <View style={styles.form}>
          <Picker
            selectedValue={this.state.type}
            mode='dropdown'
            onValueChange={(type) => this.setState({
              type
            })}>
            <Picker.Item label='Query' value='query' />
            <Picker.Item label='Task' value='task' />
          </Picker>

          <Picker
            selectedValue={this.state.assignee}
            mode='dropdown'
            onValueChange={(user) => this.setState({
              assignee: user
            })}>{
              this.state.users.map((user, index) => {
                return(
                  <Picker.Item value={user.email} label={user.displayName} key={index} />
                );
              })
            }
            
          </Picker>
          <TextInput placeholder='Title' value={this.state.title} onChangeText={title => this.setState({title})}/>
          <TextInput placeholder='Description' value={this.state.description} multiline={true} onChangeText={description => this.setState({description})}></TextInput>
          <Button style={styles.addBtn} isLoading={false} disabledStyle={styles.addBtn} onPress={() => this._onSubmit()} 
          textStyle={styles.btnText}>Submit</Button>

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