import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView } from "react-native"
import { TextInput } from "react-native-gesture-handler";
import {auth} from "../../firebase";


const LoginScreen = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        const subscriber = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.replace("Home")
            }
        })

        return subscriber;

    }, [])

    const onUserRegister = () => {
        auth.createUserWithEmailAndPassword(email,password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Registered with: ', user.email);
        })
        .catch(error => alert(error.message))
    }
    
    const onUserLogin = () => {
        auth.signInWithEmailAndPassword(email,password)
        .then(userCredentials => {
            const user = userCredentials.user;
            navigation.replace('Home')
            console.log('Logged in with: ', user.email);
        })
        .catch(error => alert(error.message))
    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.inputContainer}>
                <Text style={styles.inputTitle}>Your Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder='e.g. johndoe@gmail.com'
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <Text style={styles.inputTitle}>Your Password</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Helloworld123'
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={onUserLogin}
                    style={styles.buttonfill}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <Text>OR</Text>
                <TouchableOpacity
                    onPress={onUserRegister}
                    style={styles.buttonOutline}>
                    <Text style={styles.buttonOutlineText}>Register</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    inputContainer: {
        width: '80%'
    },
    inputTitle: {
        fontWeight: "400",
        fontSize: 16
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 30,
        borderColor: "lightgray",
        borderWidth: 1,
        fontSize: 16
    },
    buttonContainer: {
        width: '80%',
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30
    },
    buttonfill: {
        backgroundColor: "#065fd4",
        width: '100%',
        padding: 15,
        borderRadius: 5,
        alignItems: "center",
        marginBottom: 10
    },
    buttonText: {
        color: "white",
        fontWeight: '700',
        fontSize: 16
    },
    buttonOutline: {
        backgroundColor: "lightgray",
        width: '100%',
        padding: 15,
        borderRadius: 5,
        alignItems: "center",
        marginTop: 10
    },
    buttonOutlineText: {
        color: "black",
        fontWeight: '700',
        fontSize: 16
    },
});

export default LoginScreen;