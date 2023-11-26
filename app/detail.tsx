import { StyleSheet, Text, ToastAndroid, View } from 'react-native';
import React, {useState, useEffect} from 'react';
import { Image } from 'react-native';
import Colors from '../constants/Colors';

// interface initialParamsType{
//   title: string,
//   desc: string,
//   harga: number
// };

export default function detailScreen() {

  const imageKaos = require("../assets/images/kaos.png")
  // const [data,setData]=useState<initialParamsType>({
  //   title: 'kaos rumahan',
  //   desc: 'nyaman dan simpel',
  //   harga: 20000
  // });

  // const insertData=() =>{
  //   fetch('http://[::1]:3000', {
  //     method: 'POST',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       title: 'Kaos Rumahan',
  //       desc: 'Nyaman dan Simpel',
  //       harga: 20000,
  //     }),
  //   })
  //   .then(response => response.json())
  //   .then(json => setData(json));
  //     };
  

  return (
    <View style={styles.container}>
      <View style={styles.card}>
      <Image
          source={imageKaos}
          style={{ width: 150, height: 150, borderRadius: 5 }}
        />
      <Text style={styles.titledetail}>
        Produk:   
      </Text>
      <View style={styles.row}>
      <Text>Desc:  </Text>
      </View>
      <View style={styles.row}>
      <Text style={{ color: "#dc143c", fontWeight: 'bold', fontSize: 18 }}>harag : </Text>
      </View>
      </View>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    marginTop: 20,
  },
  titledetail: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  image: {
    width: 150,
    height: 150,
    // alignSelf: 'center', // Memastikan gambar berada di tengah secara horizontal
    marginBottom: 20,
    borderRadius: 20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  isicard: {
    fontSize: 15,
  },
  row: {
    flexDirection: 'row',
  },
});

