import {Text, View, StyleSheet, Image, TouchableOpacity} from "react-native";

export default function SecondOnBoarding() {
    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../../../assets/onBoardingImages/Group 3.png')}
            />
            <View style={styles.pagination}>
                <View style={styles.dot} />
                <View style={[styles.dot, styles.activeDot]} />
                <View style={styles.dot} />
            </View>
            <Text style={styles.title}>
                The most Secure Platform for Customers
            </Text>
            <Text style={styles.description}>
                Built-in Fingerprint, face recognition and more, keeping you completely safe
            </Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        backgroundColor: "#ffffff",
    },
    logo: {
        width: 370, // Adjust based on your image dimensions
        height: 300,
        resizeMode: "contain",
        marginBottom: 40, // Space below the image
    },
    pagination: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20, // Space below pagination
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: "#d3d3d3", // Gray color for inactive dots
        marginHorizontal: 5,
    },
    activeDot: {
        backgroundColor: "#007BFF", // Blue color for the active dot
    },
    title: {
        fontFamily: "Poppins-SemiBold",
        fontSize: 24,
        color: "#000",
        textAlign: "center",
        marginBottom: 15, // Space below the title
    },
    description: {
        fontFamily: "Poppins-Regular",
        fontSize: 14,
        color: "gray",
        textAlign: "center",
        marginTop:40,
        marginBottom: 20, // Space below the description
        lineHeight: 20,
    },
    button: {
        backgroundColor: "#007BFF", // Blue color
        borderRadius: 10, // Slightly rounded corners
        paddingVertical: 15,
        paddingHorizontal: 170,
        marginTop: 100,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000", // Shadow effect
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5, // For Android shadow
    },
    buttonText: {
        color: "#fff", // White text
        fontFamily: "Poppins-SemiBold",
        fontSize: 16,
    },
});
