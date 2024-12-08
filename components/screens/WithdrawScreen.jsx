import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, Alert } from 'react-native';

export function WithdrawScreen({ route, navigation }) {
    const { userDetails, setUserDetails } = route.params; // Receive userDetails and updater function
    const [amount, setAmount] = useState('');

    const handleWithdraw = () => {
        const withdrawAmount = parseFloat(amount);

        if (!amount || isNaN(withdrawAmount) || withdrawAmount <= 0) {
            Alert.alert('Error', 'Please enter a valid amount');
            return;
        }

        if (withdrawAmount > userDetails.balance) {
            Alert.alert('Error', 'Insufficient funds');
            return;
        }

        const newBalance = userDetails.balance - withdrawAmount;

        // Update balance and reset input
        setUserDetails({ ...userDetails, balance: newBalance });
        setAmount('');
        Alert.alert('Success', `Withdrawal of $${withdrawAmount} completed`);

        // Return to HomeScreen
        navigation.goBack();
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Withdraw Funds</Text>
            </View>
            <View style={styles.form}>
                <Text style={styles.label}>Amount</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter amount"
                    keyboardType="numeric"
                    value={amount}
                    onChangeText={setAmount}
                />
                <TouchableOpacity
                    style={[styles.button, userDetails.balance === 0 && styles.buttonDisabled]}
                    onPress={handleWithdraw}
                    disabled={userDetails.balance === 0}
                >
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
                {userDetails.balance === 0 && <Text style={styles.errorText}>Balance is zero. Cannot withdraw.</Text>}
            </View>
            <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
                <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
        padding: 16,
    },
    header: {
        marginBottom: 20,
        alignItems: 'center',
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#007BFF',
    },
    form: {
        backgroundColor: '#ffffff',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3.84,
        elevation: 5,
        marginTop: 80,
    },
    label: {
        fontSize: 16,
        marginBottom: 10,
        color: '#333',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
        fontSize: 16,
    },
    button: {
        backgroundColor: '#007BFF',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonDisabled: {
        backgroundColor: '#ccc',
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    cancelButton: {
        marginTop: 20,
        alignItems: 'center',
    },
    cancelText: {
        color: '#007BFF',
        fontSize: 16,
        textDecorationLine: 'underline',
    },
    errorText: {
        color: 'red',
        marginTop: 10,
        textAlign: 'center',
    },
});

export default WithdrawScreen;
