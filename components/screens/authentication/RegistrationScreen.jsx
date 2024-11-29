import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image, SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const RegistrationScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color="#007BFF" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Sign up</Text>
            </View>

            {/* Welcome Text */}
            <View style={styles.welcomeContainer}>
                <Text style={styles.welcomeTitle}>Welcome to us</Text>
                <Text style={styles.welcomeSubtitle}>Hello there, sign in to continue</Text>

                {/* Icon */}
                <View style={styles.iconContainer}>
                    <Ionicons name="lock-closed-outline" size={80} color="#007BFF" />
                </View>
            </View>

            {/* Input Fields */}
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder="Name" placeholderTextColor="#ccc" />
               <TextInput style={styles.input} placeholder="Text input" placeholderTextColor="#ccc" />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry={true}
                    placeholderTextColor="#ccc"
                />
                <TouchableOpacity>
                    <Text style={styles.forgotPassword}>Forgot your password ?</Text>
                </TouchableOpacity>

                <Text style={styles.privacytermButtonText}>By creating an account your aggree
                    to our  Term and Condtions</Text>
            </View>

            {/* Sign In Button */}
            <TouchableOpacity style={styles.signInButton} disabled={true}>
                <Text style={styles.signInButtonText}>Sign in</Text>
            </TouchableOpacity>

            {/* Fingerprint and Sign Up */}
            <View style={styles.bottomContainer}>

                <Text style={styles.signUpText}>
                    Have an account?{' '}
                    <Text style={styles.signUpLink} onPress={() => navigation.navigate('LoginScreen')}>Sign in</Text>
                </Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F4F6',
        padding: 20,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    headerText: {
        color: '#007BFF',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    welcomeContainer: {
        alignItems: 'center',
        marginBottom: 30,
    },
    welcomeTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#007BFF',
        marginBottom: 5,
    },
    welcomeSubtitle: {
        fontSize: 16,
        color: '#8E8E93',
    },
    iconContainer: {
        marginVertical: 20,
        backgroundColor: '#bfcfe3',
        borderRadius: 50,
        padding: 20,
    },
    inputContainer: {
        marginBottom: 20,
    },
    input: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        margin:20
    },
    forgotPassword: {
        alignSelf: 'flex-end',
        color: '#8E8E93',
        fontSize: 14,
        marginTop: 5,
    },
    privacytermButtonText:{
        color: '#8E8E93',
        fontSize: 14,
        marginTop: 5,
        margin: 5,
    },
    signInButton: {
        backgroundColor: '#007BFF',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        margin:20,
    },
    signInButtonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    bottomContainer: {
        alignItems: 'center',
        marginTop: 30,
    },
    signUpText: {
        fontSize: 14,
        color: '#8E8E93',
        marginTop: 20,
    },
    signUpLink: {
        color: '#007BFF',
        fontWeight: 'bold',
    },
});

export default RegistrationScreen;