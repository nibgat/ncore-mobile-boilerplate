import React from "react";
import {
    NavigationContainer
} from "@react-navigation/native";
import {
    createNativeStackNavigator 
} from '@react-navigation/native-stack';
import LoadingPage from "../pages/loading";
import AuthNav from "./authNav";

const RootStack = createNativeStackNavigator();

const RootNav = () => {
    return <RootStack.Navigator>
        <RootStack.Screen
            name="Loading"
            component={LoadingPage}
            options={{
                headerShown: false
            }}
        />
        <RootStack.Screen
            name="Auth"
            component={AuthNav}
            options={{
                headerShown: false
            }}
        />
    </RootStack.Navigator>;
};

const NavigationProvider = () => {
    return <NavigationContainer>
        <RootNav/>
    </NavigationContainer>;
};
export default NavigationProvider;
