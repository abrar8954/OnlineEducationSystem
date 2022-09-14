import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, View, StyleSheet, Text, Image } from "react-native";


const Menu = () => {
    const navigation = useNavigation();

    return <View style={styles.menuContainer} >
        {/* <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => navigation.navigate("Home")}>
            <Text>Home</Text>
        </TouchableOpacity> */}

        <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => navigation.navigate("Contact")}>
            <Image
                style={styles.iconStyle }
                source={require('../assets/contact.png')}
            />
        </TouchableOpacity>

        <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => navigation.navigate("About")}>
            <Image
                style={styles.iconStyle }
                source={require('../assets/about.png')}
            />
        </TouchableOpacity>

        <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => navigation.navigate("Courses")}>
            <Image
                style={styles.iconStyle }
                source={require('../assets/course.png')}
            />
        </TouchableOpacity>

        <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => navigation.navigate("Student")}>
            <Image
                style={styles.iconStyle }
                source={require('../assets/student.png')}
            />
        </TouchableOpacity>
    </View>
};

const styles = StyleSheet.create({
    menuContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    iconStyle: {
        width: "100%",
        height: 38,
        aspectRatio: 1
    }
});

export default Menu;