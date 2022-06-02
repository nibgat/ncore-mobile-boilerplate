import React from "react";
import {
    View
} from "react-native";
import styles from "./stylesheet";
import {
    useNCoreLocalization,
    useNCoreTheme,
    PageContainer,
    TextInput,
    Button,
    Text
} from "ncore-mobile";

const Login = ({
    navigation
}) => {
    const {
        spaces
    } = useNCoreTheme();
    const {
        localize
    } = useNCoreLocalization();

    return <PageContainer
        scrollable={false}
    >
        <Text
            style={[
                styles.title,
                {
                    marginTop: spaces.content * 10,
                    marginBottom: spaces.content
                }
            ]}
        >
            {localize("welcomeToLogin")}.
        </Text>
        <View
            style={[
                styles.formContainer
            ]}
        >
            <TextInput
                title={localize("userName")}
                style={[
                    {
                        marginBottom: spaces.content * 2
                    }
                ]}
            />
            <TextInput
                title={localize("password")}
                secureTextEntry={true}
                style={[
                    {
                        marginBottom: spaces.content * 4
                    }
                ]}
            />
            <Button
                title={localize("send")}
                spreadBehaviour="stretch"
                style={[
                    {
                        marginBottom: spaces.content * 8
                    }
                ]}
            />
        </View>
        <View
            style={[
                styles.redirectToRegisterContainer
            ]}
        >
            <Text>
                {localize("redirectToRegister")} 
            </Text>
            <Button
                title={localize("register")}
                color="primary"
                variant="ghost"
                onPress={() => {
                    navigation.navigate("Register");
                }}
                style={{
                    paddingRight: spaces.content / 2,
                    paddingLeft: spaces.content / 2
                }}
            />
        </View>
    </PageContainer>;
};
export default Login;
