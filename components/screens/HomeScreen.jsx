import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export function HomeScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.mainContent}>
                {/* Card section */}
                <View style={styles.cardContainer}>
                    <View style={styles.card}>
                        <Text style={styles.cardTitle}>John Smith</Text>
                        <Text style={styles.cardSubtitle}>Amazon Platinum</Text>
                        <View style={styles.cardDetails}>
                            <Text style={styles.cardNumber}>**** **** **** 9018</Text>
                            <Text style={styles.cardBalance}>$3,469.52</Text>
                            <Text style={styles.cardType}>VISA</Text>
                        </View>
                    </View>
                </View>

                {/* Button grid */}
                <View style={styles.buttonGrid}>
                    {[
                        { title: 'Account and Card', screen: 'AccountScreen' },
                        { title: 'Transfer', screen: 'TransferScreen' },
                        { title: 'Withdraw', screen: 'WithdrawScreen' },
                        { title: 'Mobile prepaid', screen: 'PrepaidScreen' },
                        { title: 'Pay the bill', screen: 'BillPaymentScreen' },
                        { title: 'Save online', screen: 'SaveOnlineScreen' },
                        { title: 'Credit card', screen: 'CreditCardScreen' },
                        { title: 'Transaction report', screen: 'TransactionReportScreen' },
                        { title: 'Beneficiary', screen: 'BeneficiaryScreen' }
                    ].map((item, index) => (
                        <TouchableOpacity
                            key={index}
                            style={styles.button}
                            onPress={() => navigation.navigate(item.screen)}
                        >
                            <Text style={styles.buttonText}>{item.title}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>

            {/* Bottom navigation */}
            <View style={styles.bottomNav}>
                <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('HomeScreen')}>
                    <Ionicons name="home" size={24} color="white" />
                    <Text style={styles.navButtonText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('SearchScreen')}>
                    <Ionicons name="search" size={24} color="white" />
                    <Text style={styles.navButtonText}>Search</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('MessagesScreen')}>
                    <Ionicons name="mail" size={24} color="white" />
                    <Text style={styles.navButtonText}>Messages</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('SettingsScreen')}>
                    <Ionicons name="settings-outline" size={24} color="white" />
                    <Text style={styles.navButtonText}>Settings</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
    
        flex: 1,
        backgroundColor: '#f9f9f9',
        flexDirection: 'column',
    },
    mainContent: {
        flex: 1,
        paddingBottom: 60, // Adjust the bottom padding to avoid overlap with the nav
    },
    cardContainer: {
        padding: 16,
        marginBottom: 20,
    },
    card: {
        backgroundColor: '#007BFF',
        borderRadius: 10,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3.84,
        elevation: 5,
    },
    cardTitle: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    cardSubtitle: {
        color: '#bbdefb',
        fontSize: 16,
        marginBottom: 10,
    },
    cardDetails: {
        marginTop: 10,
    },
    cardNumber: {
        color: '#ffffff',
        fontSize: 16,
        marginBottom: 5,
    },
    cardBalance: {
        color: '#ffffff',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    cardType: {
        color: '#ffffff',
        fontSize: 16,
    },
    buttonGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 16,
    },
    button: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginBottom: 10,
        width: '30%',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 1.41,
        elevation: 2,
    },
    buttonText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
    },
    bottomNav: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
        backgroundColor: '#007BFF',
    },
    navButton: {
        alignItems: 'center',
        padding: 8,
        borderRadius: 5,
    },
    navButtonText: {
        color: '#ffffff',
        fontSize: 12,
        marginTop: 4,
    },
});

export default HomeScreen;