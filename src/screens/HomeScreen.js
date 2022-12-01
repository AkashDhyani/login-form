import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { auth } from "../../firebase";

const HomeScreen = ({ navigation }) => {

    const onSignOut = () => {
        auth.signOut().then(() => {
            navigation.replace("Login")
        }).catch(error => alert(error.message))
    }

    return (
        <View style={styles.container}>
            <Text>Email: {auth.currentUser?.email}</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={onSignOut}>
                <Text style={styles.buttonText}>Sign Out</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        backgroundColor: "#065fd4",
        width: '60%',
        padding: 15,
        borderRadius: 5,
        alignItems: "center",
        marginVertical: 30
    },
    buttonText: {
        color: "white",
        fontWeight: '700',
        fontSize: 16
    },
});

export default HomeScreen;