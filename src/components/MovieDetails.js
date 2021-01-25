import React from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';

import { formatCurrency } from '../util';

const MovieDetails = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Details</Text>
      <View style={styles.item}>
        <Text style={styles.itemTitle}>Release Date: </Text>
        <Text>{props.details.release_date}</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.itemTitle}>Budget: </Text>
        <Text>
          {props.details.budget
            ? `$${formatCurrency(props.details.budget)}`
            : 'N/A'}
        </Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.itemTitle}>Revenue: </Text>
        <Text>
          {props.details.revenue
            ? `$${formatCurrency(props.details.revenue)}`
            : 'N/A'}
        </Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.itemTitle}>HomePage: </Text>
        {props.details.homepage ? (
          <Text
            style={styles.link}
            onPress={() => Linking.openURL(`${props.details.homepage}`)}>
            Website
          </Text>
        ) : (
          <Text>N/A</Text>
        )}
      </View>
      <View style={styles.item}>
        <Text style={styles.itemTitle}>Languages: </Text>
        <Text>
          {props.details.spoken_languages
            .map((language) => `${language.name}`)
            .join(', ')}
        </Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.itemTitle}>Country of Origin: </Text>
        <Text>
          {props.details.production_countries.length > 0
            ? props.details.production_countries
                .map((country) => `${country.iso_3166_1}`)
                .join(', ')
            : 'N/A'}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    paddingBottom: 10,
  },
  item: {
    flexDirection: 'row',
  },
  itemTitle: {
    fontWeight: 'bold',
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default MovieDetails;
