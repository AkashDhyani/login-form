import React from "react";
import { Text, View, StyleSheet, FlatList, SafeAreaView } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { useSelector } from "react-redux";

const SessionUsersScreen = () => {

    const users = useSelector(state => state);
    console.log(users);

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Users registered in this session:</Text>
            {users.length > 0 ?
                <FlatList
                    data={users}
                    keyExtractor={user => user.email}
                    style={styles.listContainer}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.item}>
                                <Text style={styles.itemTitle}>Email id: </Text>
                                <Text style={styles.email}>{item.email}</Text>
                            </View>
                        )
                    }} /> :
                <View style={styles.noUsersContainer}>
                    <Text style={styles.noUsertext}>There are no users registered in this session.</Text>
                    <AntDesign name="frowno" size={50} color="#ed1a6e" />
                </View>}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        alignItems: "center",
    },
    title: {
        fontSize: 22,
        fontWeight: "600",
        marginVertical: 25
    },
    listContainer: {
        width: '100%',
        marginTop: 20
    },
    item: {
        borderWidth: 1,
        marginHorizontal: 40,
        marginVertical: 5,
        padding: 10,
        borderColor: "lightgray",
        backgroundColor: "#e6e6e6"
    },
    itemTitle: {
        fontSize: 18,
        fontWeight: "500",
        marginBottom: 10
    },
    email: {
        fontSize: 16
    },
    noUsersContainer:{
        marginTop: 60,
        marginHorizontal: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    noUsertext: {
        fontSize: 18,
        fontWeight: "500",
        textAlign: "center",
        marginBottom: 20
    },
})

export default SessionUsersScreen;