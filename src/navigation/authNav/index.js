import React from "react";
import {
    createNativeStackNavigator 
} from '@react-navigation/native-stack';
import LoginPage from "../../pages/login";
import RegisterPage from "../../pages/register";

const AuthStack = createNativeStackNavigator();

const AuthNav = () => {
    return <AuthStack.Navigator>
        <AuthStack.Screen
            name="Login"
            component={LoginPage}
            options={{
                headerShown: false
            }}
        />
        <AuthStack.Screen
            name="Register"
            component={RegisterPage}
            options={{
                headerShown: false
            }}
        />
    </AuthStack.Navigator>;
};
export default AuthNav;
