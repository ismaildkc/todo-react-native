import * as React from "react"
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import { Plus, Calendar, List } from "./icons"
import Box from "./Box"

import {COLORS} from '../constants'

function TabBar({ state, descriptors, navigation }) {
  return (
    <View style={styles.tabBar}>
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
          <View key={label} style={styles.addButtonContainer}>
            <TouchableOpacity
              style={styles.addButton}
              onPress={onPress}
              onLongPress={onLongPress}
            >
              <Plus stroke="white" />
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity key={label}
            style={[ styles.button]}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            { label === 'Calendar' && <Calendar 
            stroke={ isFocused ? COLORS.orange : COLORS.gray} />}
            { label === 'Tasks' && <List 
            stroke={ isFocused ? COLORS.orange : COLORS.gray} />}
            <View style={[styles.dot, isFocused && styles.dotActive ]} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    paddingBottom: 25
  },
  addButtonContainer: {
    padding: 10,
    borderRadius:99,
    marginTop: -20,
    backgroundColor: '#fff'
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  addButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 56,
    height: 56,
    backgroundColor: COLORS.orange,
    borderRadius: 99
  },
  dot: {
    backgroundColor: '#fff',
    width: 4,
    height: 4,
    marginTop: 5,
    borderRadius: 99
  },
  dotActive: {
    backgroundColor: COLORS.orange,
  }
})

export default TabBar