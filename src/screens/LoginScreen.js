import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Switch, Alert } from "react-native"
import { TextInput } from "react-native-gesture-handler";
import { auth } from "../../firebase";
import { useDispatch } from "react-redux";
import { addUserAction } from "../redux/Actions";


const LoginScreen = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    useEffect(() => {
        const subscriber = auth.onAuthStateChanged(user => {
            if (user) {
                //addUser(user)
                navigation.replace("Home")
            }
        })

        return subscriber;

    }, [])

    const dispatch = useDispatch();

    const addUser = (user) => {
        dispatch(addUserAction(user))
    }

    const onUserRegister = () => {
        auth.createUserWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                addUser(user);
                navigation.replace('Home')
                console.log('Registered with: ', user.email);
            })
            .catch(error => alert(error.message))
    }

    const onUserLogin = () => {
        auth.signInWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                navigation.replace('Home')
                console.log('Logged in with: ', user.email);
            })
            .catch(error => alert(error.message))
    }

    const buttonAlert = () =>
    Alert.alert(
      "",
      "Please accept the terms & conditions for log in or register",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );

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

            <View style={styles.termsContainer}>
                <Switch trackColor={{ false: "whitesmoke", true: "#81AA66" }}
                    thumbColor={isEnabled ? "white" : "white"}
                    onValueChange={toggleSwitch}
                    value={isEnabled} />
                <Text style={styles.terms}>By logging in, I accept the terms & conditions of the platform.</Text>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={isEnabled ? onUserLogin : buttonAlert}
                    style={styles.buttonfill}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <Text>OR</Text>
                <TouchableOpacity
                    onPress={isEnabled ? onUserRegister : buttonAlert}
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
    termsContainer: {
        width: '80%',
    },
    terms:{
        marginTop: 10
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