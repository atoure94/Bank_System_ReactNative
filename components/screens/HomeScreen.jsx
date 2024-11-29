import { View, Text, StyleSheet } from "react-native";

export function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>
                Welcome to your Bank APP
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",

    }
})