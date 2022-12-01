import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { auth } from "../../../firebase";
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = ({ navigation }) => {

    const onSignOut = () => {
        auth.signOut().then(() => {
            navigation.replace("Login")
        }).catch(error => alert(error.message))
    }


    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.menu} onPress={() => navigation.openDrawer()}>
                <Feather name="menu" size={24} color="black" />
            </TouchableOpacity>
            <View style={styles.inputContainer}>
                <Text style={styles.title}>Welcome to our App!</Text>
                <FontAwesome5 name="smile-beam" size={75} color="#ed1a6e" />
                <View style={styles.emailContainer}>
                    <Text style={styles.text}>Your registered Email ID: </Text>
                    <Text style={styles.email}>{auth.currentUser?.email}</Text>
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={onSignOut}>
                    <Text style={styles.buttonText}>Sign Out</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    inputContainer: {
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    menu: {
        alignSelf: "flex-start",
        marginLeft: 10,
    },
    title: {
        fontSize: 30,
        fontWeight: "600",
    },
    emailContainer: {
        alignItems: "center"
    },
    text: {
        fontSize: 24,
        fontWeight: "500"
    },
    email: {
        fontSize: 16,
        marginTop: 10
    },
    button: {
        backgroundColor: "#065fd4",
        width: '60%',
        padding: 15,
        borderRadius: 5,
        alignItems: "center"
    },
    buttonText: {
        color: "white",
        fontWeight: '700',
        fontSize: 16
    },
});

export default HomeScreen;