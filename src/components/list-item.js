import * as React from "react"
import { StyleSheet, TouchableOpacity, View, Text } from "react-native"

import { Arrow, Folder, Cross } from "./icons"

import { COLORS, CLASSES, SIZE } from '../constants'

function ListItem({ navigation, data }) {
  const isTask = false

  return (
    <TouchableOpacity
      style={[styles.container, data.isChecked && styles.checkedTask]}
    >
      <View style={[styles.left]} >
        { data.isChecked && <View style={[styles.dot]}></View> }
        <Text>{data.title}</Text>
      </View>
      <View style={[styles.right]} >
      { !data.isChecked && <Cross fill={COLORS.red} />}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: COLORS.borderColor,
    borderWidth: 1,
    borderRadius: SIZE.borderRadius,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: 25,
    height: 25,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: COLORS.purple,
    marginRight: 15
  },
  checkedTask:{

  }
})

export default ListItem