import * as React from "react"
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import { Plus, Calendar, List } from "./icons"
import Box from "./Box"

function TabBar({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return label === 'Add' ? ( 
          <View style={styles.addButtonContainer}>
            <TouchableOpacity
              style={styles.addButton}
              onPress={onPress}
              onLongPress={onLongPress}
            >
              <Plus stroke="white" />
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity
            style={[ styles.button]}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            {label === 'Calendar' && <Calendar />}
            {label === 'Tasks' && <List />}
            <View style={[styles.dot, isFocused && styles.dotActive ]} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  addButtonContainer: {
    padding: 10,
    borderRadius:99,
    marginTop: -15,
    backgroundColor: '#fff'
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    paddingTop: 6
  },
  addButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 56,
    height: 56,
    backgroundColor: '#E11E3C',
    borderRadius: 99
  },
  dot: {
    backgroundColor: '#fff',
    width: 3,
    height: 3,
    marginTop: 8
  },
  dotActive: {
    backgroundColor: '#E11E3C',
  }
})

export default TabBar