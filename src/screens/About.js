import {
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native'
import React from 'react'

const About = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#B8B8F4', }}>

      <View style={{flexDirection: 'row', marginLeft: 20, marginTop: 50}}>
        <Image
          style={styles.imgStyle}
          source={require('../../assets/profile2.jpg')}
        />

        <View style={{marginLeft: 10}}>
        
        <Text style={styles.mainHeader}> Abrar Sardar </Text>
        <Text style={styles.paraStyle}> I am a mobile app developer  </Text>

        </View>

      </View>


      <View style={styles.aboutContainer}>

        <View style={styles.aboutLayout}>
          <Text style={styles.aboutSubHeader}> About me </Text>
          <Text style={[styles.paraStyle, styles.aboutPara]}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Lorem ipsum dolor sit amet, consectetuer
            adipiscing elit. Aenean commodo ligula eget dolor.
          </Text>
        </View>

        <Text style={[styles.mainHeader, styles.mainHeader1,]}> Follow me on Social Network </Text>

        <View style={styles.menuContainer}>

          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() =>
              Linking.openURL("https://www.instagram.com/abrar/")
            }>
            <Image
              style={styles.iconStyle}
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() =>
              Linking.openURL(
                "https://www.youtube.com/watch?v=GVZ61LRGf0w"
              )
            }>
            <Image
              style={styles.iconStyle}
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/187/187210.png",
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => Linking.openURL("https://www.youtube.com/watch?v=GVZ61LRGf0w")}>
            <Image
              style={styles.iconStyle}
              source={require('../../assets/facebook.png')}
            />
          </TouchableOpacity>
        </View>
      </View>

    </View>


  );
}
const styles = StyleSheet.create({
  aboutContainer: {
    // display: "flex",
    alignItems: "center",
    flex: 1
  },

  imgStyle: {
    width: 100,
    height: 100,
    borderRadius: 100,
    marginTop: 20
  },
  mainHeader: {
    fontSize: 18,
    color: "white",
    textTransform: "uppercase",
    fontWeight: "500",
    marginTop: 50,
    marginBottom: 10,
    fontFamily: "JosefinSans_700Bold",
  },
  paraStyle: {
    fontSize: 18,
    color: "#7d7d7d",
    paddingBottom: 30,
  },
  aboutLayout: {
    backgroundColor: "#F3BD5B",
    paddingHorizontal: 30,
    marginVertical: 15,
    marginTop: 45
  },
  aboutSubHeader: {
    fontSize: 18,
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: "500",
    marginVertical: 10,
    fontFamily: "JosefinSans_700Bold",
    alignSelf: "center",
  },
  aboutPara: {
    color: "#fff",
  },
  menuContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  iconStyle: {
    width: "100%",
    height: 50,
    aspectRatio: 1,
  },
  mainHeader1: {

    marginTop: 20,

  },
})

export default About;

