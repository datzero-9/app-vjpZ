import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useEffect } from 'react';

const Register = () => {
  return (
    <SafeAreaView>
      <View style={{ margin: 30 }}>

        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Đăng ký</Text>
        </View>

        <View style={styles.form}>
          <Text style={styles.title}>Họ tên: </Text>
          <View >
            <Ionicons name='person-add-sharp' style={styles.icon} />
            <TextInput placeholder='Nhập Họ và tên' style={styles.input} />
          </View>
        </View>

        <View style={styles.form}>
          <Text style={styles.title}>Thông tin email </Text>
          <View >
            <Ionicons name='mail-outline' style={styles.icon} />
            <TextInput placeholder='Nhập email' style={styles.input} />
          </View>
        </View>

        <View style={styles.form}>
          <Text style={styles.title}>Nhập mật khẩu: </Text>
          <View >
            <Ionicons name='person-add-sharp' style={styles.icon} />
            <TextInput placeholder='Nhập email' style={styles.input} />
          </View>
        </View>

        <View style={styles.form}>
          <Text style={styles.title}>Nhập lại mật khẩu: </Text>
          <View >
            <Ionicons name='person-add-sharp' style={styles.icon} />
            <TextInput placeholder='Nhập email' style={styles.input} />
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 5 }}>
          <Text style={{ color: 'blue' }}>Tôi đã có tài khoản</Text>
          <Text style={{ color: 'blue' }}>Quên mật khẩu ?</Text>
        </View>
        <TouchableOpacity onPress={()=>alert('Vui lòng nhập đầy đủ thông tin')}>
          <View style={{ borderRadius: 20, borderWidth: 1, alignItems: 'center', paddingVertical: 10, marginTop: 20, backgroundColor: '#0066FF' }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#fff' }} >Đăng ký tài khoản</Text>
          </View>
        </TouchableOpacity>
        <Text style={{ paddingTop: 20, textAlign: 'center' }}>Hoặc đăng ký bằng</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
          <Image source={require('../../assets/fb2.jpg')} style={styles.img} />
          <Image source={require('../../assets/gg.png')} style={styles.img} />
          <Image source={require('../../assets/tw.jpg')} style={styles.img} />

        </View>
      </View>
    </SafeAreaView>
  )
}

export default Register

const styles = StyleSheet.create({
  form: {
    // borderWidth: 1,
    marginTop: 30,

  },
  title: {
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 10
  },
  icon: {
    fontSize: 25,
    position: 'absolute'

  },
  input: {
    borderBottomWidth: 1,
    paddingLeft: 30,
    paddingTop: 3,
    fontSize:16
  },
  img: {
    width: 30,
    height: 30,
    borderRadius: 50,
    marginHorizontal: 10,

  }
})