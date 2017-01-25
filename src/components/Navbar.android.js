import React, { Component } from 'react';
import { StyleSheet, Dimensions } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export default class Navbar extends Component {
  static propTypes = {
    title: React.PropTypes.string,
    onLeftPress: React.PropTypes.func
  }

  render() {
    const { title, onLeftPress } = this.props;
    return(
      <Icon.ToolbarAndroid navIconName='md-arrow-back' onIconClicked={onLeftPress}
      style={styles.toolbar} titleColor={'white'} title={title}/>
    );
  }
}

const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#4682B4',
    height: 54,
    position: 'absolute',
    top: 0,
    left: 0,
    width: Dimensions.get('window').width
  }
});
