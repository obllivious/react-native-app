
import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    StatusBar,

}   from 'react-native';

import Routes from './src/Routes';

export default class App extends Component {
    render() {
        return (

            <View style={styles.container}>

                <StatusBar

                backgroundColor = "#42a5f5"
                barStyle = "light-content"
                
                />

                <Routes />

            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#42a5f5", // Azul Claro.
    },

});

/* 

Colar depois da Tag:

<Login />

<Text style={styles.welcome}>Welcome to App1</Text>
<Text style={styles.instructions}>Develloped in React Native</Text>

const styles = StyleSheet.create({

    Colar abaixo de:

    container: {

    }

    welcome: {
        fontSize: 28,
        textAlign: "center",
        color: "#FFF",

    },

    instructions: {
        fontSize: 13,
        textAlign: "center",
        color: "#e8eaf6",
    }

*/