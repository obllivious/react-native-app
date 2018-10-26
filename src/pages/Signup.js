
import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,

}   from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';

import {Actions} from 'react-native-router-flux';

export default class Signup extends Component {
    
    goBack() {
        Actions.pop();
    }

    render() {
        return (

            <View style = {styles.container}>
                
                <Logo />
                <Form type = "Signup"/>
                
                <View style = {styles.signupTextCont}>

                    <Text style = {styles.signupText}>Already have an account?</Text>
                    <TouchableOpacity onPress = {this.goBack}><Text style = {styles.signupButton}> Sign in</Text></TouchableOpacity>

                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#42a5f5", // Azul Claro.
        alignItems: "center",
        justifyContent: "center",
    },

    signupTextCont: {
        flexGrow: 1,
        alignItems: "flex-end",
        justifyContent: "center",
        paddingVertical: 25,
        flexDirection: "row",
    },

    signupText: {
        color: "#ffffff",
        fontSize: 16,
    },

    signupButton: {
        color: "#ffffff",
        fontSize: 16,
        fontWeight: "500",
    },

});