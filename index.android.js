/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { 
  AppRegistry, 
  Text,
  TextInput,
  Navigator, 
  Image, 
  View, 
  ListView,
  TouchableHighlight,
  StyleSheet 
} from 'react-native';
//import Firebase from 'firebase';
import * as firebase from 'firebase';
import LoginView from './src/modules/login/LoginView';
import SignupView from './src/modules/signup/SignUpView';
import TodoListView from './src/modules/todo-list/TodoListView';
import NewTodo from './src/modules/new-todo/NewTodo';




class HelloWorldApp extends Component {
  constructor(props) {
    super(props);
    
  }

  //after the component has rendered
  componentDidMount() {
    
    
  }



/*constructor code*/
  /*const firebaseConfig = {
      apiKey: 'AIzaSyCDyzDBmOOvHwxTayCgxGD60d7sPJowMFg',
      authDomain: 'https://my-awesome-project-f248c.firebaseio.com/',
      databaseURL: 'https://my-awesome-project-f248c.firebaseio.com/'
    };

    firebase.initializeApp(firebaseConfig);
    
    this.todosRef = firebase.database().ref('todos/');

    this.state  = {
      todo: '',
      todoSource: new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 })
    };

    this.todos = [];   */



    /**  @componentDidMount
     * //listener for adding a child
    this.todosRef.on('child_added', (dataSnapShot) => {
      this.todos.push({ id: dataSnapShot.key, text: dataSnapShot.val()});

      this.setState({
        todoSource: this.state.todoSource.cloneWithRows(this.todos)
      });
    });

    //listener for removing a child
    this.todosRef.on('child_removed', (dataSnapShot) => {
      this.todos = this.todos.filter((x) => x.id !== dataSnapShot.key);

      this.setState({
        todoSource: this.state.todoSource.cloneWithRows(this.todos)
      });
    });
  }

  addTodo() {
    if(this.state.todo !== '') {
      this.todosRef.push(this.state.todo);

      this.setState({
        todo: ''
      });
    }
  }

  removeTodo(rowData) {
    this.todosRef.child(rowData.id).remove();
  }

  renderRow = (rowData) => {
    return(
      <TouchableHighlight underlayColor='#dddddd' onPress={() => this.removeTodo(rowData)}>
        <View>
          <View style={styles.row}>
            <Text style={styles.todoText}> {rowData.text} </Text>

          </View>
          <View style={styles.separator} />
        </View>
      </TouchableHighlight>
    )
    */

    
  render() {
    return (
      <Navigator initialRoute={{
        id: 'new-todo'
      }} renderScene={this.renderNavigatorScene} />
    );
  }


  renderNavigatorScene(route, navigator) {
    switch(route.id) {
      case 'signin': 
        return( <LoginView navigator={navigator}/> );
      case 'signup':
      return ( <SignupView navigator={navigator}/>);   

      case 'todo-list':
      return ( <TodoListView navigator={navigator}/>);

      case 'new-todo':
      return ( <NewTodo navigator={navigator} title='New Todo'/>);
    }


  }
}

/*
<View style={styles.appContainer}>
        <View style={styles.titleView}>
          <Text style={styles.titleText}> My Todos! </Text>
        </View>

        <View style={styles.inputcontainer}>
          <TextInput style={styles.input} value={this.state.todo}
            placeholder='New Todo' onChangeText={todo => this.setState({todo})}  />
          <TouchableHighlight style={styles.button} 
          underlayColor='#dddddd' onPress={() => this.addTodo()}>
          <Text style={styles.btnText}>Add</Text>
          </TouchableHighlight>  
        </View>

        <ListView dataSource={this.state.todoSource} renderRow={this.renderRow} />
      
      </View>
      
      */

const styles = StyleSheet.create({
  appContainer:{
    flex: 1
  },
  titleView:{
    backgroundColor: '#48afdb',
    paddingTop: 30,
    paddingBottom: 10,
    flexDirection: 'row'
  },
  titleText:{
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 20,
  },
  inputcontainer: {
    marginTop: 5,
    padding: 10,
    flexDirection: 'row'
  },
  button: {
    height: 36,
    flex: 2,
    flexDirection: 'row',
    backgroundColor: '#48afdb',
    justifyContent: 'center',
    // color: '#FFFFFF',
    borderRadius: 4,
  },
  btnText: {
    fontSize: 18,
    //color: '#fff',
    marginTop: 6,
  },
  input: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flex: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48afdb',
    borderRadius: 4,
    color: '#48BBEC'
  },
  row: {
    flexDirection: 'row',
    padding: 12,
    height: 44
  },
  separator: {
    height: 1,
    backgroundColor: '#CCCCCC',
  },
  todoText: {
    flex: 1,
  }
});



AppRegistry.registerComponent('HelloWorldApp', () => HelloWorldApp);