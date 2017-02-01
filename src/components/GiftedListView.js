import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableHighlight,
  Text
} from 'react-native';

import * as _ from 'lodash';
import GiftedListView from 'react-native-gifted-listview';

import * as FirebaseDb from '../services/firebase.database'; 

export default class CustomListView extends Component {
  constructor(props) {
    super(props);
  }

  /**
   * Will be called when refreshing
   * Should be replaced by your own logic
   * @param {number} page Requested page to fetch
   * @param {function} callback Should pass the rows
   * @param {object} options Inform if first load
   */
  _onFetch(page = 1, callback, options) {
    var header = 'Header ' + page;
    var rows = [];
    FirebaseDb.getAssignments(this.props.person).then((payload) => {
      _.forOwn(payload, (value, key) => {
        rows.push(value) 
      });
      callback(rows);
    });
    /*setTimeout(() => {
      var header = 'Header '+page;
      var rows = {};
      rows[header] = ['row ' + ((page - 1) * 3 + 1), 'row ' + ((page - 1) * 3 + 2), 'row ' + ((page - 1) * 3 + 3)];
      if (page === 5) {
        callback(rows, {
          allLoaded: true, // the end of the list is reached
        });
      } else {
        callback(rows);
      }
    }, 1000); // simulating network fetching*/
  }

 /**
 * When a row is touched
 * @param {object} rowData Row data
 */
  _onPress(rowData) {
    console.log(rowData + ' pressed');
  }

  /**
 * Render a row
 * @param {object} rowData Row data
 */
  _renderRowView(rowData) {
    return (
      <TouchableHighlight
        style={styles.row}
        underlayColor='#c8c7cc'
        onPress={() => this._onPress}
        >
        <Text>{rowData.description}</Text>
      </TouchableHighlight>
    );
  }

   /**
   * Render section header
   * @param sectionData, sectionID
   */
  _renderSectionHeaderView(sectionData, sectionID) {
    return (
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          {sectionID}
        </Text>
      </View>
    );
  }

   /**
   * Render a separator between rows
   */
  _renderSeparatorView() {
    return (
      <View style={styles.separator} />
    );
  }

  render() {
    return (
      <GiftedListView
        rowView={this._renderRowView}
        onFetch={this._onFetch.bind(this)}
        firstLoader={true} // display a loader for the first fetching
        pagination={true} // enable infinite scrolling using touch to load more
        refreshable={true} // enable pull-to-refresh for iOS and touch-to-refresh for Android
        withSections={false} // enable sections
        customStyles={{
          paginationView: {
            backgroundColor: '#eee',
          },
        }}

        enableEmptySections={true}
        renderSeparator={this._renderSeparatorView}
        //sectionHeaderView={this._renderSectionHeaderView}
        refreshableTintColor="blue"
        />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  navBar: {
    height: 64,
    backgroundColor: '#CCC'
  },
  row: {
    padding: 10,
    height: 44,
  },
  header: {
    backgroundColor: '#50a4ff',
    padding: 10,
  },
  headerTitle: {
    color: '#fff',
  },
  separator: {
    height: 1,
    backgroundColor: '#CCC'
  },
});