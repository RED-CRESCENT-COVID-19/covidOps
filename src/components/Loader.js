import React, { Component } from "react";
import { View, ActivityIndicator, StyleSheet, Dimensions} from "react-native";
const { width: deviceWidth, height: deviceHeight } = Dimensions.get("window");

export default class Loader extends Component {
  render() {
    return (
        <View style={styles.loaderContainer}>
            <ActivityIndicator style={styles.loader} color="red" size="large" />
        </View>
    );
  }
}

const styles = StyleSheet.create({
    loaderContainer: {
        width: deviceWidth,
        height: deviceHeight,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.3)",
        position: "absolute"
      },
      loader: {
        alignItems: "center",
        justifyContent: "center",
        width: deviceWidth,
        height: deviceHeight,
        top: 0,
        left: 0
      },
});
