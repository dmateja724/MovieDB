import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TitleBar = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.details.title}</Text>
      <View style={styles.info}>
        <Text style={styles.text}>
          {props.details.runtime > 0
            ? `${props.details.runtime} min |`
            : 'N/A |'}
        </Text>
        {props.details.genres.map((genre) => (
          <Text style={styles.text} key={genre.name}>
            {` ${genre.name} `}
          </Text>
        ))}
        <Text style={styles.text}>
          {`| ${props.details.release_date.slice(0, 4)}`}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    justifyContent: 'center',
    paddingBottom: 15,
  },
  text: {
    color: 'grey',
    fontSize: 12,
  },
  info: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default TitleBar;
