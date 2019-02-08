import React, { Component } from 'react';

import { View, StyleSheet, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Timeline extends Component {
  static navigationOptions = {
    title: 'Start',
    headerRight: (
      <TouchableOpacity onPress={() => {}}>
        <Icon
          style={{ marginRight: 10 }}
          name="add-circle-outline"
          size={24}
          color="#4BB0EE"
        />
      </TouchableOpacity>
    ),
  };

  state = {
    tweets,
  };

  async componentDidMount() {}

  render() {
    return <View style={styles.container} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});
