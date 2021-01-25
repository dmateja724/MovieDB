import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const DetailsHeader = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.onCancel}>
        <View style={styles.circle}>
          <Text style={styles.text}>X</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    backgroundColor: 'grey',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 10,
  },
  circle: {
    borderWidth: 1,
    borderColor: 'rgba(187, 187, 187, 0.5)',
    borderRadius: 100,
    height: 32,
    width: 32,
    borderRadius: 30,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255, 0.7)',
  },
  text: {
    fontSize: 20,
    color: 'grey',
  },
});

export default DetailsHeader;
