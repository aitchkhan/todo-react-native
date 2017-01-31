import React, { Component } from 'react';

import { View, 
  StyleSheet, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  Button,
  ToolbarAndroid,
  ScrollView 
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';

import CustomListView from '../../components/GiftedListView'

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
          <Icon name='md-add' color='black' size={30} style={styles.icons} />
        </TouchableOpacity>

        <View style={styles.containerToolbar}>
          <ScrollableTabView style={{ marginTop: 30 }} initialPage={0}
            renderTabBar={() => <DefaultTabBar />}>
            <CustomListView tabLabel= "Assigned" style={styles.tabView} />
            
            <ScrollView tabLabel="Received" style={styles.tabView}>
              <View style={styles.card}>
                <Text>Friends</Text>
              </View>
            </ScrollView>
          </ScrollableTabView>

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
  icons: {
    marginRight: 15 ,
    justifyContent: 'space-around',
    alignSelf: 'flex-end'
  }

});