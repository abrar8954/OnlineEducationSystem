import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React, { useState, useEffect, } from 'react'
import UData from '../api/apiUserData';

const UserData = () => {
  const [isLoaded, setIsLoaded] = useState([]);
  const [myData, setMyData] = useState([]);


  // useEffect(() => getUserData = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://thapatechnical.github.io/userapi/users.json"
  //     );
  //     const realData = await response.json();
  //     setMyData(realData);
  //     setIsLoaded(false);
  //     console.log(myData);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, []);

  const showUserData = ({ item }) => {
    return (
      <View style={styles.card}>
        <View style={styles.imgContainer}>
          <Image style={styles.imgStyle} source={ item.image } />
        </View>

        <View>
          <View style={styles.bioDataContainer}>
            <Text style={styles.bioData}> Bio-Data </Text>
            <Text style={styles.idNumber}>
              {item.id < 10 ? `#0${item.id}` : `#${item.id}`}
            </Text>
          </View>

          <View style={styles.mainContain}>
            <Text style={styles.myName}> Name: {item.name} </Text>
            <Text style={styles.myName}> email: {item.email} </Text>
            <Text style={styles.myName}> mobile: {item.mobile} </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: '#B8B8F4'}}>
      <Text style={styles.mainHeader}>Students</Text>
      <Image style={{alignSelf: 'center', marginTop: 20, }} source={require('../../assets/rectangle1.png')} />
      <FlatList
        keyExtractor={(item) => item.id}
        data={UData}
        renderItem={showUserData}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  // mainContainer: {
  //   width: "100%",
  //   minHeight: "100%",
  //   paddingVertical: 50,
  //   backgroundColor: "#ebedee",
  // },
  card: {
    width: 250,
    height: 350,
    backgroundColor: "#fff",
    borderRadius: 15,
    margin: 20,
  },
  bioDataContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#083838",
    paddingVertical: 10,
    fontFamily: "JosefinSans_400Regular",
  },
  idNumber: {
    fontSize: 20,
    color: "rgba(255, 255, 255, 0.5)",
    fontFamily: "JosefinSans_400Regular",
    paddingRight: 10,
  },
  bioData: {
    fontSize: 30,
    color: "#fff",
    fontFamily: "JosefinSans_400Regular",
  },
  mainHeader: {
    fontSize: 30,
    color: "blue",
    textAlign: "center",
    fontFamily: "JosefinSans_400Regular",
    marginTop: 40
  },
  imgContainer: {
    padding: 10,
  },
  imgStyle: {
    width: "100%",
    height: 180,
  },
  mainContain: {
    padding: 10,
    backgroundColor: "#083838" ,                       //"#353535",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  myName: {
    fontSize: 14,
    color: "#fff",
    marginBottom: 10,
    // alignSelf: "flex-start",
    textTransform: "capitalize",
    fontFamily: "JosefinSans_400Regular",
  },
})

export default UserData

