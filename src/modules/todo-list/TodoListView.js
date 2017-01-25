import React, { Component } from 'react';

import { View, 
  StyleSheet, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  Button,
  ToolbarAndroid 
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import ScrollableTabView, {DefaultTabBar } from 'react-native-scrollable-tab-view';
export default class TodoListView extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }
  _actionSelected = (position) => {

  }

  _navigate(route) {
    this.props.navigator.push({
      id: 'new-todo'
    })
  }
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.toolbar}></View>
      <TouchableOpacity onPress={() => this._navigate('new-todo')}>
      <Icon name='md-add' color='black' size={30} style={styles.addBtn}/>
      </TouchableOpacity>
    
        <View style={styles.containerToolbar}>
          <ScrollableTabView style={{ marginTop: 30 }}
            renderTabBar={() => <DefaultTabBar />}>
             
            <Text tabLabel='Assigned'></Text>
            <Text tabLabel='Sent'></Text>
          </ScrollableTabView>
         
        </View>
        <View style={styles.list}>
          <Text>Todo List View</Text>
          <Text>Todo List View</Text>
          <Text>Todo List View</Text>
          <Text>Todo List View</Text>
          <Text>Todo List View</Text>
          <Text>Todo List View</Text>
          <Text>Todo List View</Text>
          <Text>Todo List View</Text>
        </View>

        
      </View>
    );
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  containerToolbar: {
    flex: 1,
    justifyContent: 'center',
    //justifyContent: 'flex-start',
    // https://github.com/facebook/react-native/issues/2957#event-417214498
    alignItems: 'stretch'
    
  },
  list: {
    flex: 6,
    justifyContent: 'space-around',
    alignItems: 'center' 
  },
  addBtn: {
    marginRight: 15 ,
    justifyContent: 'space-around',
    alignSelf: 'flex-end'
  }

});