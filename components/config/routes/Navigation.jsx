import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstOnBoarding from "../../screens/onboarding/FirstOnboarding";
import SecondOnBoarding from "../../screens/onboarding/SecondOnBoarding";
import ThirdOnBoarding from "../../screens/onboarding/ThirdOnBoarding";

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="FirstOnBoarding" component={FirstOnBoarding} />
                <Stack.Screen name="SecondOnBoarding" component={SecondOnBoarding} />
                <Stack.Screen name="ThirdOnBoarding" component={ThirdOnBoarding} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
