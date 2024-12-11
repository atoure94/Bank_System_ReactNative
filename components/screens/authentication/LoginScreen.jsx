import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image,
    SafeAreaView,
    Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';

const LoginScreen = ({ navigation }) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const getUsers = async () => {
        try {
            const users = JSON.parse(await AsyncStorage.getItem('users')) || [];
            return users;
        } catch (e) {
            console.error('Error retrieving users:', e);
            return [];
        }
    };

    const handleLogin = async () => {
        if (phoneNumber === '' || password === '') {
            Alert.alert('Error', 'Please fill in all fields');
            return;
        }

        setIsLoading(true);
        try {
            const users = await getUsers();
            const user = users.find(
                (user) => user.phoneNumber === phoneNumber && user.password === password
            );

            if (user) {
                Alert.alert('Success', 'Logged in successfully');
                navigation.navigate('HomeScreen', { userDetails: user });
            } else {
                Alert.alert('Error', 'Invalid credentials');
            }
        } catch (e) {
            console.error(e);
            Alert.alert('Error', 'Something went wrong');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Sign in</Text>
            </View>

            <View style={styles.welcomeContainer}>
                <Text style={styles.welcomeTitle}>Welcome Back</Text>
                <Text style={styles.welcomeSubtitle}>Sign in to continue</Text>
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source={require('../../../assets/onBoardingImages/lock.png')}
                    />
                </View>
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Phone number"
                    placeholderTextColor="#ccc"
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                    keyboardType="phone-pad"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry={true}
                    placeholderTextColor="#ccc"
                    value={password}
                    onChangeText={setPassword}
                />
                <TouchableOpacity>
                    <Text
                        style={styles.forgotPassword}
                        onPress={() => navigation.navigate('ForgotPasswordScreen')}
                    >Forgot your password?</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity
                style={styles.signInButton}
                onPress={handleLogin}
                disabled={isLoading}
            >
                <Text style={styles.signInButtonText}>
                    {isLoading ? 'Signing in...' : 'Sign in'}
                </Text>
            </TouchableOpacity>

            <View style={styles.bottomContainer}>
                <TouchableOpacity>
                    <Ionicons name="finger-print" size={80} color="#007BFF" />
                </TouchableOpacity>
                <Text style={styles.signUpText}>
                    Don’t have an account?{' '}
                    <Text
                        style={styles.signUpLink}
                        onPress={() => navigation.navigate('RegistrationScreen')}
                    >Sign Up</Text>
                </Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F3F4F6', padding: 20 },
    headerContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
    headerText: { color: '#007BFF', fontSize: 18, fontWeight: 'bold', marginLeft: 10 },
    welcomeContainer: { alignItems: 'center', marginBottom: 30 },
    welcomeTitle: { fontSize: 28, fontWeight: 'bold', color: '#007BFF', marginBottom: 5 },
    welcomeSubtitle: { fontSize: 16, color: '#8E8E93' },
    logoContainer: { marginVertical: 20, borderRadius: 50, paddingTop: 20 },
    inputContainer: { marginBottom: 20 },
    input: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 15,
        marginBottom: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        margin: 20,
    },
    forgotPassword: { alignSelf: 'flex-end', color: '#8E8E93', fontSize: 14, marginTop: 5 },
    signInButton: {
        backgroundColor: '#007BFF',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        margin: 20,
    },
    signInButtonText: { color: '#ffffff', fontSize: 16, fontWeight: 'bold' },
    bottomContainer: { alignItems: 'center', marginTop: 30 },
    signUpText: { fontSize: 14, color: '#8E8E93', marginTop: 20 },
    signUpLink: { color: '#007BFF', fontWeight: 'bold' },
    logo: { width: 180, height: 130, resizeMode: 'contain', marginBottom: 40 },
});

export default LoginScreen;