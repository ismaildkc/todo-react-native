import * as React from "react"
import { StyleSheet, TouchableOpacity, View, Text } from "react-native"

import { Arrow, Folder, Cross} from "./icons"

import { COLORS, CLASSES, SIZE } from '../constants'

function FolderItem({ children, navigation }) {
  const isTask = false

  return (
    <TouchableOpacity 
      onPress={() => navigation.navigate('Detail')}
      style={ [styles.container] }
    >
      <View style={ [styles.left]} >
        { isTask ?
          <Cross marginRight={10} fill={COLORS.black} />
          :
          <Folder marginRight={10} fill={COLORS.black} />
        }
        <Text>Stay Alive!</Text>
      </View>
      <View style={ [styles.right]} >
        <Arrow fill={COLORS.black} />
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
  }
})

export default FolderItem