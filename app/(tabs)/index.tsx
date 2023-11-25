import { Button, StyleSheet, TouchableOpacity } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { Image } from 'react-native';
import { Link } from 'expo-router';

import imageKaos from '../../assets/images/kaos.png';
import imageKemeja from '../../assets/images/kemeja.png';

const handleBeli = () => {
  console.log('You tapped the button!');
};

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selamat Datang !</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View style={styles.row}>
      <Image
        source={imageKaos}
        style={{ width: 150, height: 150 }}
      />
      </View>
      <TouchableOpacity
          style={[styles.button]}
          onPress={() => {
            console.log('You tapped the button!');
          }}
        >
          <Text style={styles.input}>Beli</Text>
        </TouchableOpacity>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View style={[styles.row, styles.produk]}>
      <Image
        source={imageKemeja}
        style={{ width: 150, height: 150 }}
      />
      </View>
      <TouchableOpacity
          style={[styles.button]}
          onPress={() => {
            console.log('You tapped the button!');
          }}
        >
          <Text style={styles.input}>Beli</Text>
        </TouchableOpacity>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    fontSize: 20,
    marginBottom: 5,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  row: {
    flexDirection: 'row',
  },
  containerProduk:{
    backgroundColor: "#FFA500",
    justifyContent: 'center',
  },
  produk: {
    marginTop: 10,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 50,
    backgroundColor: '#ff8c00',
    marginTop: 8,
  },
});