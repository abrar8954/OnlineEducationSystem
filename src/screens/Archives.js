import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';

const Archives = ({ navigation }) => {
    return (

        <View style={{ flex: 1, backgroundColor: "#fff" }}>

            <View style={{ overflow: 'hidden', paddingBottom: 5, marginTop: 22 }}>
                {/* <Text onPress={() => navigation.navigate("Home")}>Archives</Text> */}

                <View style={styles.headerBar}>
                    <TouchableOpacity style={{}} onPress={() => navigation.navigate("Home")}>
                        {/* <Icon name="arrow-left" size={20} color="black" /> */}
                        <Image
                            style={styles.headerImage}
                            source={require('../../assets/left-arrow.png')}
                        />
                    </TouchableOpacity>

                    <View style={{ flex: 1, alignItems: "center" }}>
                        <Text style={styles.headerText}>Archives</Text>
                    </View>

                </View>
            </View>

        </View>



    )
}
const styles = StyleSheet.create({
    headerBar: {
        backgroundColor: '#fff',
        width: "100%",
        height: 60,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 5,
        paddingLeft: 15,
        flexDirection: "row",
        alignItems: "center"
    },
    headerText: {
        fontSize: 25,
        fontFamily: "Nunito_600SemiBold"
    },
    headerImage: {
        width:30,
        height:30
    },
})

export default Archives

