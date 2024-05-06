import { Button, SafeAreaView, StyleSheet, Text, View, Image, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native'
import axios from 'axios';
import React, { useEffect, useState } from 'react'


const Home = ({ navigation, route }) => {

  const [product, setProduct] = useState([])
  const [load, setLoad] = useState(true)

  const getApi = () => {
    axios.get('http://10.0.3.2:8000/api/list-product')
      .then((response) => {
        setProduct(response.data)
        setLoad(false);
      })
      .catch((error) => {
        console.log('lỗiiiiii', error)
        
      })

  }

  useEffect(() => {
    console.log('okee')
    setLoad(true)
    getApi(); 
  }, []);



  return (
    <SafeAreaView>
      <Text style={{ textAlign: 'center', fontSize: 26, marginTop: 20 }}>Danh sách sản phẩm</Text>
      <View style={{ marginHorizontal: 20, marginBottom: 120 }}>
        {load ? (<ActivityIndicator style={{marginTop:200, }} size="large"/>) : (<FlatList
          data={product}
          numColumns={2}
          columnWrapperStyle={styles.row}
          renderItem={({ item }) =>
            <View style={{ paddingTop: 20 }}>
              <TouchableOpacity >
                <Text >Sản phẩm - {item.id} </Text>
                <Text >{item.name ? (item.name.length > 20 ? item.name.slice(0, 20) + '...' : item.name) : ''}</Text>
                <Image source={{ uri: `http://10.0.3.2:8000/storage/images/${item.image}` }} style={{ width: 180, height: 150 }} />
              </TouchableOpacity>
            </View>
          }
        />)}

      </View >

    </SafeAreaView>


  )
}

export default Home

const styles = StyleSheet.create({
  row: {
    flex: 1,
    justifyContent: 'space-between'

  }
})