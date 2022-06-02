import React from 'react';
import styles from "./stylesheet";
import {
    GestureHandlerRootView
} from "react-native-gesture-handler";
import {
    NCoreProvider
} from "ncore-mobile";
import Navigation from "./navigation";
import GlobalStateProvider from "./context";
import {
    tr,
    en
} from './locales';

/*
// Theese codes are for typescript ( for auto suggest. )
declare global {
    namespace NCore {
        interface Translation {
            redirectToRegister: String;
            register: String;
            userName: String;
            password: String;
            send: String;
            welcomeToLogin: String;
            welcomeToRegister: String;
            fullName: String;
            login: String;
            redirectToLogin: String;
        }
    }
}
*/

const App = () => {
    return <GestureHandlerRootView
        style={[
            styles.gestureHandler
        ]}
    >
        <NCoreProvider
            config={{
                initialThemeKey: "dark",
                locales: [
                    tr,
                    en
                ]
            }}
        >
            <GlobalStateProvider>
                <Navigation/>
            </GlobalStateProvider>
        </NCoreProvider>
    </GestureHandlerRootView>;
};
export default App;
