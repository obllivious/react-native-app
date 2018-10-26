
import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
    Image,

}   from 'react-native';

export default class Logo extends Component {
    
    render() {
        return (

            <View style = {styles.container}>

                <Image style = {{ width: 40, height: 70 }}  source = {require('../images/logo3.png')} />
                <Text style = {styles.logoText}>Welcome to Synthetic</Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flexGrow: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundColor: "#42a5f5",
    },

    logoText: {
        marginVertical: 10,
        fontSize: 26,
        color: "rgba(255, 255, 255, 0.7)"
    }

});