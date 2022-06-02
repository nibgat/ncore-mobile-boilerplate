import React, {
    useEffect
} from "react";
import {
    ActivityIndicator
} from "react-native";
import styles from "./stylesheet";
import {
    useNCoreTheme,
    PageContainer
} from "ncore-mobile";

const Loading = ({
    navigation
}) => {
    const {
        colors
    } = useNCoreTheme();

    // test effect:
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Auth");
        }, 3000);
    }, []);

    return <PageContainer
        scrollable={false}
        style={[
            styles.container
        ]}
    >
        <ActivityIndicator
            color={colors.primary}
            size="large"
        />
    </PageContainer>;
};
export default Loading;
