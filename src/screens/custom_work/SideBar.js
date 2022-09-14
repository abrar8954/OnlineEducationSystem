import { StyleSheet, Text, View, Image, Button } from 'react-native'
import React from 'react'
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import Home from '../Home';
import { TouchableOpacity } from 'react-native-gesture-handler';


const SideBar = ({ navigation }) => {  // {...props}
  return (
    // {...props}
    <DrawerContentScrollView style={{ backgroundColor: '#B8B8F4' }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
        <Image source={require('../../../assets/diamond.png')}
          style={{
            height: 80, width: 80, borderRadius: 40,
            marginBottom: 10, marginTop: 10
          }}
        />

        <Text style={styles.mainHeader}>Diamond Academy</Text>

        <Image style={{ marginTop: 50, marginBottom: 20 }} source={require('../../../assets/rectangle1.png')} />

      </View>


      <TouchableOpacity style={styles.btnStyle} onPress={() => navigation.navigate("Favourites")}>

        <Image style={{height: 32, width: 32, marginLeft:20  }} source={require('../../../assets/favourite.png')} />
        <Text style={styles.textStyle}  >Favourites</Text>

      </TouchableOpacity>

      <TouchableOpacity style={styles.btnStyle} onPress={() => navigation.navigate("Archives")}>

        <Image style={{height: 32, width: 32, marginLeft:20  }} source={require('../../../assets/archive.png')} />
        <Text style={styles.textStyle}  >Archives</Text>

      </TouchableOpacity>

      <TouchableOpacity style={styles.btnStyle} onPress={() => navigation.navigate("Trash")}>

        <Image style={{height: 32, width: 32, marginLeft:20  }} source={require('../../../assets/trash.png')} />
        <Text style={styles.textStyle}  >Trash</Text>

      </TouchableOpacity>


    
      {/* <DrawerItemList {...props} />  */}
      <Image style={{ marginTop: 150 }} source={require('../../../assets/rectangle1.png')} />
      
      {/* <TouchableOpacity style={styles.btnStyle} onPress={() => navigation.navigate("Contact")}> */}

        {/* <Image style={{height: 32, width: 32, marginLeft:20  }} source={require('../../../assets/facebook.png')} /> */}
        <Text style={[styles.textStyle, {marginTop: 30, }]}  onPress={() => navigation.navigate("Contact")}>Privacy</Text>

      {/* </TouchableOpacity> */}

    </DrawerContentScrollView>
  )
}

export default SideBar

const styles = StyleSheet.create({
  mainHeader: {
    fontSize: 20,
    color: "white",
    textTransform: 'uppercase',
   

  },
  textStyle: {
    fontSize: 15,
    color: "white",
    textTransform: 'uppercase',
    marginLeft: 10,
    fontWeight: 'bold',
  },

  btnStyle: {
    flexDirection: 'row' , 
    alignItems: 'center',
    marginTop: 30
  }
})