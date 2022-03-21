import * as React from "react";
import { StyleSheet, Text, View } from "react-native"

function Box() {
  return (
    <Text style={styles.box}>Hello</Text>
  )
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'red',
  },
  container: {
    marginTop: 50,
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

export default Box