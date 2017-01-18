import React, { Component } from 'react';

import { View, 
  StyleSheet, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  Button,
  ToolbarAndroid 
} from 'react-native';

export default class TodoListView extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }
  _actionSelected = (position) => {

  }
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.containerToolbar}> 
        <ToolbarAndroid logo={require('../../../images/ic_menu_black_48dp_1x.png')}
          title="Todo app" actions={[{title: 'Settings', 
          icon: require('../../../images/ic_settings_black_48dp_1x.png'), show: 'always'}]} 
          onActionSelected={() => this._actionSelected} />
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

        <View style={styles.tabs}>
          <TouchableOpacity>
            <Text style={styles.recievedBtn}>Recieved</Text>
            <Text style={styles.sentBtn}>Sent</Text> 
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
  },
  containerToolbar: {
    flex: 1,
    //justifyContent: 'center',
    justifyContent: 'flex-start',
    // https://github.com/facebook/react-native/issues/2957#event-417214498
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  list: {
    flex: 6,
    justifyContent: 'space-around',
    alignItems: 'center' 
  },
  tabs: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    backgroundColor: '#bfbfbf',
  },
  recievedBtn: {
    fontSize: 20
  },
  sentBtn: {
    fontSize: 20
  }


});