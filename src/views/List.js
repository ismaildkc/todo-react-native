import * as React from "react"
import { TouchableOpacity, StyleSheet, FlatList, View, Text } from "react-native"
import SafeAreaView from 'react-native-safe-area-view';

import Search from "../components/search"
import FolderItem from "../components/folder-item"

import { CLASSES, COLORS } from '../constants'
import { Arrow } from "../components/icons"

const DATA = [
  {
    id: 1,
    folderTitle: 'Folder',
    title: 'First Item',
  },
  {
    id: 2,
    folderTitle: 'Lorem',
    title: 'Second Item',
  },
  {
    id: 3,
    folderTitle: 'Ipsum Dolor',
    title: 'Third Item',
  },
  {
    id: 4,
    folderTitle: 'Folder',
    title: 'First Item',
  },
  {
    id: 5,
    folderTitle: 'Lorem',
    title: 'Second Item',
  },
  {
    id: 6,
    folderTitle: 'Ipsum Dolor',
    title: 'Third Item',
  },
];

function ListView({ navigation }) {
  const [isSearchFocus, setSearchFocus] = React.useState(false)

  const [open, setOpen] = React.useState(false)

  const height = open ? "auto" : 0
  const bottomRadius = open ? 0 : 8

  const renderItem = ({ item }) => (
    (!open && <View>
      <FolderItem navigation={navigation} />
    </View>)
  );

  return (
    <SafeAreaView style={CLASSES.layout}>
      <Search onChangeFocus={status => setSearchFocus(status)} />

      <TouchableOpacity onPress={() => setOpen(prev => !prev)}>
        <View style={styles.header}>
          <Text style={CLASSES.textTitle}>Folders</Text>
          <Arrow style={[styles.arrow, {transform: [{ rotate: open ? '90deg' : '-90deg' }]}]} fill={COLORS.black} />
        </View>

        <FlatList {...{open}}
          style={CLASSES.flatListlayout}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />

      </TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 15,
    paddingTop: 25,
    paddingBottom: 10,
  },
  arrow: {
    transform: [{ rotate: '-90deg' }]
  }
})

export default ListView