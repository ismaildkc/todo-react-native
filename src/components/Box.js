import * as React from "react";
import { StyleSheet, View } from "react-native"

const Box = () => {
  return (
    <View style={styles.box}></View>
  )
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'red',
    width: 3,
    height: 3
  },
});

export default Box