import * as React from "react"
import { FlatList, StyleSheet, View, Text } from "react-native"
import SafeAreaView from 'react-native-safe-area-view'

import ListItem from "../components/list-item"

import { CLASSES, COLORS } from '../constants'

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    isChecked: false,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    isChecked: true,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    isChecked: false,
  },
]



function DetailView(){

  const renderItem = ({ item }) => (
    <ListItem data={item} />
  );

  return (
    <SafeAreaView style={CLASSES.layout}>
      <View style={styles.header}>
        <Text style={CLASSES.textTitle}>Folders</Text>
      </View>

      <FlatList 
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

      
    </SafeAreaView>
  )
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
})

export default DetailView