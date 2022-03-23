import React from 'react';
import { View, StyleSheet } from 'react-native'

import Input from './input'
import { Search } from './icons'

import { COLORS, CLASSES } from '../constants'

function SearchBox() {
  return (
    <View style={styles.container}>
      <Search style={styles.icon} fill={COLORS.gray} zIndex={1} />
      <Input style={[CLASSES.input, styles.input]} placeholder="Search" placeholderTextColor={COLORS.gray} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    justifyContent: 'center',
  },
  input: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 50,
  },
  icon: {
    position: 'absolute',
    left: 15,
  }
})

export default SearchBox