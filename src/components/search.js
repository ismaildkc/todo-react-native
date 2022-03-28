import React from 'react';
import { View, StyleSheet, Button, TouchableOpacity, Keyboard } from 'react-native'

import Input from './input'
import { Search, Cross } from './icons'

import { COLORS, CLASSES } from '../constants'

function SearchBox({ onChangeFocus }) {
  const [value, setValue] = React.useState('')
  const [isFocused, setFocus] = React.useState(false)

  React.useEffect(() => {
    Keyboard.addListener("keyboardDidShow", keyboardDidShow );
    Keyboard.addListener("keyboardDidHide", keyboardDidHide );
    
    return function() {
      Keyboard.removeAllListeners("keyboardDidShow", keyboardDidShow );
      Keyboard.removeAllListeners("keyboardDidHide", keyboardDidHide );
    }

  }, [])

  const keyboardDidShow = () => {
    console.log("true");
  }
  
  const keyboardDidHide = () => {
    console.log("false");
  }

  const onClose = (e) => {
    setFocus(false)
    Keyboard.dismiss()
    setValue('')
  }

  return (
    <View style={styles.container}>
      <Search style={styles.icon} fill={COLORS.gray} zIndex={1} />
      <Input
        style={[CLASSES.input, styles.input]}
        placeholder="Search"
        placeholderTextColor={COLORS.gray}
        value={value}
        onFocus={() => setFocus(true)}
        onChangeText={value => { setValue(value) }}
      />
      {isFocused && (
        <Cross onPress={() => onClose()} style={[styles.icon, styles.cross]} fill={COLORS.red} zIndex={1} />
      )}
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
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 15,
    shadowOffset: {
      width: 0,
      height: 4
    },
  },
  icon: {
    position: 'absolute',
    left: 15,
  },
  cross: {
    right: 15,
    left: 'auto',
  }
})

export default SearchBox