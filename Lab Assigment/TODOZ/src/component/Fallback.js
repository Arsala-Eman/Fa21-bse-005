import React from "react";
import { StyleSheet, View, Image } from "react-native";

const Fallback = () => {
    return (
        <View style={styles.container}>
            <Image 
                source={require('C:\Users\LENOVO\Todoz\assets\download.png')} 
                style={{ height: 200, width: 300 }} 
            />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default Fallback;
const style  = StyleSheet. create({});
