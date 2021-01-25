import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RatingsBar = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.ratingsSection}>
        <Text style={styles.ratingsTitle}>Rating:</Text>
        <Text>{props.details.vote_average} / 10</Text>
      </View>
      <View style={styles.ratingsSection}>
        <Text style={styles.ratingsTitle}>Total Votes:</Text>
        <Text>{props.details.vote_count}</Text>
      </View>
      <View style={styles.ratingsSection}>
        <Text style={styles.ratingsTitle}>Popularity:</Text>
        <Text>{parseFloat(props.details.popularity).toFixed(2)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    padding: 5,
  },
  ratingsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  ratingsSection: {
    alignItems: 'center',
  },
});

export default RatingsBar;
