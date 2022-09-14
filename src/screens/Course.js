import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Courses from '../api/apiCourse'


const Course = ({ navigation }) => {

  const courseCard = ({ item }) => {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.courseContainer}>
          <View >
            <Image
              style={styles.cardImage}
              source={item.image}
            />
          </View>
          <Text style={styles.mainHeader}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => navigation.navigate("CourseDetails", {
                courseId: item.id,
              })
              }>
                 <Image
              style={{height:32, width: 32,marginRight: 10}}
              source={require('../../assets/facebook.png')}
            />
              <Text style={styles.buttonText}>More</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (

    <View style={{backgroundColor: '#EDF3F7'}}>
      <FlatList
        // keyExtractor={(item) => item.id}
        data={Courses}
        renderItem={courseCard}
      />
    </View>

  );
}
const styles = StyleSheet.create({
  cardImage: {
    width: "100%",
    height: undefined,
    aspectRatio: 1
  },
  mainContainer: {
    paddingHorizontal: 20,


  },
  courseContainer: {
    padding: 30,
    backgroundColor: "#B8B8F4" ,                 //"rgba(255, 255, 255, 0.90)",
    textAlign: "center",
    borderRadius: 5,
    shadowColor: "grey",
    // shadowOffset: {width: 0, height: 0},
    // shadowOpacity: 0,
    // shadowRadius: 8,
    elevation: 8,
    marginVertical: 30,
  },
  mainHeader: {
    fontSize: 22,
    color: "white",
    textTransform: "uppercase",
    paddingBottom: 15,
    textAlign: "center",
    fontFamily: "Nunito_600SemiBold",
    marginTop: 15

  },
  description: {
    textAlign: "left",
    fontFamily: "JosefinSans_400Regular",
    paddingBottom: 15,
    lineHeight: 20,
    fontSize: 16,
    color: "white",
  },
  buttonContainer: {
    // display: "flex",
    // flexDirection: "row",
    // justifyContent: "center",
    alignItems: 'center',
  },
  buttonStyle: {
    backgroundColor: "#0185FF",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    flexDirection: 'row'
  },
  buttonText: {
    fontSize: 20,
    color: "#eee",
    fontFamily: "JosefinSans_500Medium",
    textTransform: "capitalize",
  },
})

export default Course

