import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ImageBackground, ToastAndroid } from 'react-native'
import React, { useState, useEffect } from 'react'
import Home from '../Home';

const SearchBar = ({ value, visible, setVisible, updateSearch, style, }) => {
    const [query, setQuery] = useState();
    const [error, setError] = useState();
    const [send, setSend] = useState();
    // send = false;

    const Send = () => {
        //   <Home
        //     send = {send}
        //   />
        ToastAndroid.show("A pikachu appeared nearby !", ToastAndroid.SHORT);
        // setSend('false')
        //   navigation.navigate("Home")
          console.log('hjdkkdk' + visible)
          setVisible(false)
          console.log('hjdkkdk' + visible)
    }


    return (
        <View style={[styles.container, style]}>

            <ImageBackground style={styles.searchBackgr} source={require('../../../assets/rec2.png')}>
                <View style={styles.searchContainer}>
                    <View style={styles.vwSearch}>
                        <Image
                            style={styles.icSearch}
                            source={require('../../../assets/ic_search.png')} />
                    </View>




                    <TextInput
                        value={query}
                        placeholder="Search"
                        placeholderTextColor={'white'}
                        style={styles.textInput}
                        // onKeyPress={() => Send()}
                        onPressIn={() => Send()}
                        onChangeText={(text) => {
                            var letters = /^$|^[a-zA-Z._\b ]+$/;
                            if (text.length > 12)
                                setError("Query too long.")
                            else if (text.match(letters)) {
                                setQuery(text)
                                updateSearch(text)
                                if (error)
                                    setError(false)
                            }
                            else setError("Please only enter alphabets")
                        }}
                    />




                    {
                        query ?
                            <TouchableOpacity
                                onPress={() => setQuery('')}
                                style={styles.vwClear}>
                                <Image
                                    style={styles.icClear}
                                    source={require('../../../assets/ic_clear.png')} />
                            </TouchableOpacity>
                            : <View style={styles.vwClear} />
                    }

                </View>

            </ImageBackground>

            {
                error &&
                <Text style={styles.txtError}>
                    {error}
                </Text>
            }
        </View >
    )
}
const styles = StyleSheet.create({
    txtError: {
        marginTop: '2%',
        width: '89%',
        color: 'white',

    },
    vwClear: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        // backgroundColor: 'green',
        flex: 1,
        color: 'white'
    },

    vwSearch: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        // width: 40,
        // backgroundColor: 'white'
    },
    icSearch: {
        height: 18, width: 18, tintColor: 'white'
    },
    searchContainer:
    {
        // backgroundColor: 'white',
        width: '85%',
        height: 55,
        flexDirection: 'row',
        borderRadius: 7
    },
    container: {
        // height: 80,
        alignItems: 'center',
        // height: '100%', width: '100%' 
    },
})



export default SearchBar

