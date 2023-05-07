import React, { useCallback, useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ToastAndroid, BackHandler, } from 'react-native';
import Home from './src/screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from './src/screens/About';
import Course from './src/screens/Course';
import Contact from './src/screens/Contact';
import UserData from './src/screens/UserData';
import Archives from './src/screens/Archives';
import CourseDetails from './src/screens/CourseDetails';
import SearchBar from './src/screens/custom_work/SearchBar';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import SideBar from './src/screens/custom_work/SideBar';
import * as SplashScreen from 'expo-splash-screen';

import {
  useFonts,
  JosefinSans_400Regular,
  JosefinSans_500Medium,
  JosefinSans_300Light,
  JosefinSans_700Bold,

} from '@expo-google-fonts/josefin-sans'
import { Nunito_600SemiBold, Nunito_700Bold, } from '@expo-google-fonts/nunito'
import AppLoading from 'expo-app-loading';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();


export default function App({ navigation }) {
  const [appIsReady, setAppIsReady] = useState(false);
  const [fontsLoaded] = useFonts({
    JosefinSans_400Regular,
    JosefinSans_500Medium,
    JosefinSans_300Light,
    Nunito_600SemiBold,
    Nunito_700Bold,
    JosefinSans_700Bold,

  });

  if (!fontsLoaded) {
    <AppLoading />
  }


  function NavTab() {
    return (
      <Tab.Navigator  initialRouteName='Home' screenOptions={{ headerShown: false, tabBarStyle: {height: 55, backgroundColor: 'white'}}}>
        <Tab.Screen name="Home" component={Home} options={{
          tabBarIcon: () =>
            <Image
              style={{ width: 30, height: 30 }}
              source={require('./assets/home.png')} />,
              tabBarLabelStyle: {fontWeight: "bold", fontSize: 12}
        }} />
        <Tab.Screen name="Student" component={UserData} options={{
          tabBarIcon: () =>
            <Image
              style={{ width: 30, height: 30 }}
              source={require('./assets/student.png')} />,
              tabBarLabelStyle: {fontWeight: "bold", fontSize: 12}
        }}/>
        <Tab.Screen name="Course" component={Course} options={{
          tabBarIcon: () =>
            <Image
              style={{ width: 30, height: 30 }}
              source={require('./assets/course.png')} />,
              tabBarLabelStyle: {fontWeight: "bold", fontSize: 12}
        }}/>
        <Tab.Screen name="Contact" component={Contact} options={{
          tabBarIcon: () =>
            <Image
              style={{ width: 30, height: 30 }}
              source={require('./assets/contact.png')} />,
              tabBarLabelStyle: {fontWeight: "bold", fontSize: 12}
        }}/>
        <Tab.Screen name="About" component={About} options={{
          tabBarIcon: () =>
            <Image
              style={{ width: 30, height: 30 }}
              source={require('./assets/about.png')} />,
              tabBarLabelStyle: {fontWeight: "bold", fontSize: 12}
        }}/>
      </Tab.Navigator>
    );
  }

  function NavDrawer() {
    return (
      // < NavigationContainer >

      <Drawer.Navigator screenOptions={{ headerShown: false }} >
        {/* <Drawer.Screen name="NavTab" component={NavTab} options={{
            drawerItemStyle: { display: 'none' }

          }} /> */}

        <Drawer.Screen name="Favourites" component={Favourites} />
        <Drawer.Screen name="Archives" component={Archives} options={{
          headerShown: true,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.Navigate("Home")}>
              <Icon style={{ paddingLeft: 10, }} name="arrow-left" size={20} color="black" />

            </TouchableOpacity>
          ),
        }} />
        <Drawer.Screen name="Trash" component={Trash} />
      </Drawer.Navigator>

      // </NavigationContainer>

    );
  }

  function NavStack() {
    return (
      <Stack.Navigator >

        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Archives" component={Archives} options={{}} />
        {/* <Stack.Screen name="SearchBar" component={SearchBar} options={{}} /> */}
        <Stack.Screen name="SideBar" component={SideBar} options={{}} />
      </Stack.Navigator>

    );
  }
  const Favourites = () => {
    ToastAndroid.show("Favourites", ToastAndroid.SHORT);
  }

  // const Archives = () => {
  //   ToastAndroid.show("Archives", ToastAndroid.SHORT);


  // }

  const Trash = () => {
    ToastAndroid.show("Trash", ToastAndroid.SHORT);
  }




  useEffect(() => {
    async function prepare() {
      try {
      
        await new Promise(resolve => setTimeout(resolve, 3000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
   
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    // <View>
    //  <Home/>

    // </View>



    < NavigationContainer  on>



      {/* //   <Stack.Navigator>

    //     <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
    //     <Stack.Screen name="Contact" component={Contact} options={{}} />

    //   </Stack.Navigator> */}








      <Drawer.Navigator screenOptions={{ headerShown: false }} drawerContent={props=><SideBar{...props}/>}>
        <Drawer.Screen name="NavTab" component={NavTab} options={{
          drawerItemStyle: { display: 'none' }

        }} />

        <Drawer.Screen name="NavStack" component={NavStack} options={{
          drawerItemStyle: { display: 'none' },
          // headerShown: true,
        }} />


        <Drawer.Screen name="Favourites" component={Favourites} options={{
          headerShown: true,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goback(null)}>
              <Icon style={{ paddingLeft: 10, }} name="arrow-left" size={20} color="black" />

            </TouchableOpacity>
          ),
        }} />
        <Drawer.Screen name="Archives" component={Archives} options={{
          // headerShown: true,
          // headerLeft: () => (
          //   <TouchableOpacity onPress={() => navigation.goback(null)}>
          //     <Icon style={{ paddingLeft: 10, }} name="arrow-left" size={20} color="black" />

          //   </TouchableOpacity>
          // ),
        }} />

        <Drawer.Screen name="Trash" component={Trash} />
      </Drawer.Navigator>


      {/* // <Tab.Navigator>
    //   <Tab.Screen name="Course" component={Course} />
    //   <Tab.Screen name="Contact" component={Contact} />
    // </Tab.Navigator> */}

      {/* // 
    // <Stack.Navigator>

    // <Stack.Screen name="NavDrawer" component={NavDrawer}  />
    // <Stack.Screen name="NavTab" component={NavTab} options={{ headerShown: false }} />


    // </Stack.Navigator> */}


    </NavigationContainer >
  );
}




{/* <Stack.Navigator> */ }
{/* <Stack.Screen name="Nav" component={Nav} options={{ headerShown: false }} /> */ }
{/* <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Courses" component={Course} options={{
        headerTitleStyle: {
          fontSize: 25,
          fontFamily: "Nunito_600SemiBold"
        },
        headerTitleAlign: "center"
      }} />
      <Stack.Screen name="About" component={About} options={{
        headerTitleStyle: {
          fontSize: 25,
          fontFamily: "Nunito_600SemiBold"
        },
        headerTitleAlign: "center"
      }} />
      <Stack.Screen name="Contact" component={Contact} options={{
        headerTitleStyle: {
          fontSize: 25,
          fontFamily: "Nunito_600SemiBold"
        },
        headerTitleAlign: "center"
      }} />
      <Stack.Screen name="Student" component={UserData} options={{
        headerTitleStyle: {
          fontSize: 25,
          fontFamily: "Nunito_600SemiBold"
        },
        headerTitleAlign: "center"
      }} />
      <Stack.Screen name="CourseDetails" component={CourseDetails} options={{
        headerTitleStyle: {
          fontSize: 25,
          fontFamily: "Nunito_600SemiBold"
        },
        headerTitleAlign: "center"
      }} />
      </Stack.Navigator> */}