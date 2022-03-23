import * as React from "react"
import { StyleSheet, Button, View, Text } from "react-native"

import Search from "../components/search"
import ListItem from "../components/list-item"

import { CLASSES, COLORS } from '../constants'
import { Arrow } from "../components/icons"

function ListView({ navigation }) {
  return (
    <View style={CLASSES.layout}>
      <Search />

      <View style={styles.header}>
        <Text style={CLASSES.textTitle}>Folders</Text>
        <Arrow style={styles.arrow} fill={COLORS.black} />
      </View>


      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />

      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Detail')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 25,
    paddingBottom: 10,
  },
  arrow: {
    transform: [{ rotate: '-90deg'}]
  }
})

export default ListView