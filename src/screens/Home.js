import { StyleSheet, Text, View, Image, Button, ImageBackground, FlatList, TouchableOpacity, TextInput, Keyboard  } from 'react-native'
import React, { useEffect, useState, } from 'react'
import Menu from '../../component/Menu';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Course from './Course';
import SearchBar from './custom_work/SearchBar';
import TrendCourses from '../api/apiTrendC';
// import send from '../../src/screens/custom_work/SearchBar'

const Drawer = createDrawerNavigator();

const Home = ({ navigation }) => {

  const [value, setValue] = useState()




  const [query, setQuery] = useState();
  const [error, setError] = useState();
  const [visible, setVisible] = useState(true);









  function updateSearch(value) {
    //do your search logic or anything
    console.log(value)
  }


  // ToastAndroid.show("Home...", ToastAndroid.SHORT);
  // console.log("home  " + visible)

  const id = 1

  const description = "Search Dissertation Writing Help Uk, Top Information From Trusted Internet Sources."

  //   nav = () => {
  // <NavigationContainer>
  //                 <Drawer.Navigator drawerContent={props=><SideBar{...props}/>}>
  //                     {/* <Drawer.Screen name="Feed" component={Feed} /> */}

  //                 </Drawer.Navigator>
  //             </NavigationContainer>
  //   }

  // Article =() =>{}

  const courseCard = ({ item }) => {
    return (
      // <View style={styles.mainContainerC}>
      <View style={styles.courseContainer}>
        <View >
          <Image
            style={styles.cardImage}
            source={item.image}
          />
        </View>
        <Text style={styles.mainHeader2}>{item.title}</Text>
        <Text style={styles.description}>{item.price}</Text>
        {/* <View style={styles.buttonContainer}>
             <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => navigation.navigate("CourseDetails", {
                courseId: item.id,
              })
              }>
              <Text style={styles.buttonText}>More</Text>
            </TouchableOpacity>
          </View> */}
      </View>
      //  </View>
    );
  };


  //   useEffect(() => {
  //     return () => {
  // id.vi
  //     }, [])



  // function Visible() {

  //   // if (visible) {

  //   // }

  // }



  useEffect(() => {
    
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setVisible(true)
    });

    return () => {
       hideSubscription.remove();
    };
  }, []);




  return (



    <ImageBackground source={require('../../assets/background.webp')} style={styles.headerImage}>

      {/* <View style={styles.mainContainer}> */}


      <View style={styles.homeTop}>

        <View style={{ flex: 1, alignItems: 'center', }}>
          <Image style={{ marginTop: 50 }} source={require('../../assets/diamond.png')} />
          <Text style={[styles.mainHeader,]}>Diamond Academy</Text>

          {/* <Image source={require('../../assets/rec2.png')}  /> */}



          <SearchBar
            value={value}
            visible={visible}
            setVisible={setVisible}
            updateSearch={updateSearch}
            style={{ marginTop: '8%' }}
          />





        </View>


        {/* <Text style={[styles.mainHeader,
            {
              fontSize: 33,
              color: "blue",
              marginTop: 0
            }]}> Diamond Academy</Text> */}

        <View style={{ flex: 1, paddingLeft: 30, paddingTop: 20, }} >
          {/* <Text style={styles.paraStyle}>{description}</Text> */}



          {/* {Visible()} */}


          {
            visible ? <Text style={[styles.trend,]}>Trend Courses</Text> :
              <Text style={[styles.trend, { display: 'none' }]}>Trend Courses</Text>

          }


          {
            visible ? <FlatList
              key={id}
              // keyExtractor={(item) => item.id}
              style={[{ marginTop: 10, }]}
              data={TrendCourses}
              renderItem={courseCard}
              horizontal
              showsHorizontalScrollIndicator={false} />

              : <FlatList
                key={id}
                // keyExtractor={(item) => item.id}
                style={[{ marginTop: 10, display: 'none' }]}
                data={TrendCourses}
                renderItem={courseCard}
                horizontal
                showsHorizontalScrollIndicator={false} />

          }


        </View>



      </View>

      {/* <View style={styles.menuStyle}>
<View style={styles.lineStyle}></View>
<Menu />
<View style={[styles.lineStyle, { marginVertical: 10 }]}></View>
</View> */}

      {/* </View> */}

    </ImageBackground>


















    // {/* <View style={{flex:1, justifyContent: "center", alignItems: "center"}}>

    //   <Button  title='Click it' onPress={() => navigation.navigate("Contact")}/>
    // </View> */}





    // <NavigationContainer>
    //   <Drawer.Navigator drawerContent={props => <SideBar{...props} />}>

    //     <Drawer.Screen name="Article" component={Article} />
    //     <Drawer.Screen name="Education" component={Article} />
    //     <Drawer.Screen name="Policy" component={Article} />
    //   </Drawer.Navigator>
    // </NavigationContainer> 


  );
}

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    justifyContent: "space-between",
    paddingHorizontal: 20,

  },


  homeTop: {
    flex: 1,
    // height: 400,
    // display: "flex",
    // justifyContent: 'center',
    // alignItems: "center",
    // paddingHorizontal: 10
    // marginTop: 8
    // backgroundColor: "blue"
  },

  headerImage: {
    width: "100%",
    height: "100%",
    // resizeMode: 'stretch'
    // aspectRatio: 1.6,
    // display: "flex",
    // marginTop: 80,
    // borderRadius: 20,



  },
  mainHeader: {
    fontSize: 30,
    color: "white",
    textTransform: 'uppercase',
    fontWeight: 'bold'
  },
  paraStyle: {
    fontSize: 19,
    color: "white",
    textAlign: 'left',
    marginTop: 60,
    paddingBottom: 50,
    lineHeight: 26,
    marginBottom: 20
  },

  lineStyle: {
    marginBottom: 10,
    borderWidth: 0.5,
    borderColor: "grey"
  },

  menuStyle: {
    marginBottom: 10,

  },

  trend: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18
  },

  cardImage: {
    width: 190,
    height: 150,
    // aspectRatio: 1

  },
  mainContainerC: {
    // paddingHorizontal: 20,
    width: 200,
    height: 100,
    backgroundColor: 'white',
    flex: 1
  },
  courseContainer: {
    padding: 5,
    backgroundColor: "#B8B8F4",                 //"rgba(255, 255, 255, 0.90)",
    textAlign: "center",
    borderRadius: 5,
    // shadowColor: "grey",
    // shadowOffset: {width: 0, height: 0},
    // shadowOpacity: 0,
    // shadowRadius: 8,
    // elevation: 8,
    // marginVertical: 30,
    height: 230,
    width: 200,
    marginRight: 15

  },
  mainHeader2: {
    fontSize: 15,
    color: "white",
    textTransform: "uppercase",
    // paddingBottom: 15,
    textAlign: "center",
    fontFamily: "Nunito_600SemiBold",
    marginTop: 15,
    fontWeight: 'bold'

  },
  description: {
    fontSize: 15,
    color: "black",
    textTransform: "uppercase",
    paddingBottom: 15,
    textAlign: "center",
    fontFamily: "Nunito_600SemiBold",
    marginTop: 5,
    fontWeight: 'bold'
  },
  buttonContainer: {
    // display: "flex",
    // flexDirection: "row",
    // justifyContent: "center",
    // alignItems: 'center',
  },
  buttonStyle: {
    backgroundColor: "#0185FF",
    borderRadius: 5,
    // paddingVertical: 10,
    paddingHorizontal: 20,
    display: "flex",
    // justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    color: "#eee",
    fontFamily: "JosefinSans_500Medium",
    textTransform: "capitalize",
  },



});


export default Home

