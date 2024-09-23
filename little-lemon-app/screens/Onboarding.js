import {Text, View, TextInput, Image, StyleSheet} from 'react-native';
import {useState} from 'react';

export default function Onboarding() {
    return (
        <>
            <View style={styles.header}>
                <Image source={require('../assets/images/Logo.png')} style={styles.logo}/>
            </View>
            <View style={styles.container}>
                <Text style={styles.introText}>Let us get to know you</Text>
                <TextInput style={styles.input} placeholder={"First Name"}/>
                <TextInput style={styles.input} placeholder={"Email"} />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 2,
        padding: 20,
        fontSize: 16,
        color: 'black',
        backgroundColor: 'white',
    },
    logo: {
        height: 30,
    },
    header: {
        backgroundColor: 'gray',
    },
    introText: {
        fontSize: 30,
        fontFamily: 'Arial',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
    }
})
