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

const LoginScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color="#007BFF" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Sign in</Text>
            </View>

            {/* Welcome Text */}
            <View style={styles.welcomeContainer}>
                <Text style={styles.welcomeTitle}>Welcome Back</Text>
                <Text style={styles.welcomeSubtitle}>Hello there, sign in to continue</Text>

                {/* Icon */}
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source={require('../../../assets/onBoardingImages/lock.png')}
                    />
                </View>
            </View>

            {/* Input Fields */}
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder="Phone number" placeholderTextColor="#ccc" />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry={true}
                    placeholderTextColor="#ccc"
                />
                <TouchableOpacity>
                    <Text style={styles.forgotPassword}>Forgot your password ?</Text>
                </TouchableOpacity>
            </View>

            {/* Sign In Button */}
            <TouchableOpacity style={styles.signInButton} disabled={true}>
                <Text style={styles.signInButtonText}>Sign in</Text>
            </TouchableOpacity>

            {/* Fingerprint and Sign Up */}
            <View style={styles.bottomContainer}>
                <TouchableOpacity>
                    <Ionicons name="finger-print" size={80} color="#007BFF" />
                </TouchableOpacity>
                <Text style={styles.signUpText}>
                    Don’t have an account?{' '}
                    <Text style={styles.signUpLink} onPress={() => navigation.navigate('RegistrationScreen')}>Sign Up</Text>
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
    logoContainer: {
        marginVertical: 20,
        borderRadius: 50,
        paddingTop:20,
    },
    inputContainer: {
        marginBottom: 20,
    },
    input: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 15,
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
    logo: {
        width: 180, // Adjust based on your image dimensions
        height: 130,
        resizeMode: "contain",
        marginBottom: 40, // Space below the image
    },
});

export default LoginScreen;