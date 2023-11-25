import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class DetailProduk extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Add friends here!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: ""
    },
});

export default DetailProduk;