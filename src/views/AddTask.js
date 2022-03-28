import * as React from "react"
import { StyleSheet, Text } from "react-native"
import SafeAreaView from 'react-native-safe-area-view';

import { CLASSES, COLORS } from "../constants"

function AddTaskView() {
  return (
    <SafeAreaView style={[CLASSES.layout, styles.layout]}>
      <Text>Add tasks!</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  layout:{
    backgroundColor: COLORS.purpleLight,
  }
})


export default AddTaskView