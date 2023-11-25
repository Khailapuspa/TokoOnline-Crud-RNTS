import { StyleSheet, Text, View } from 'react-native';

export default function DetailProdukScreen() {
  return (
    <View style={styles.container}>
      <Text>Baju Hits</Text>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: ""
  },
});

