import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function DetailProduk() {
    return (
      <View style={styles.container}>
        <Text>Baju Hitz</Text>
      </View>
    );
  }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: "#8fbc8f"
    },
});
