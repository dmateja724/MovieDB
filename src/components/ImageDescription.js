import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDescription = (props) => {
  return (
    <>
      {props.details.tagline ? (
        <View style={styles.tagline}>
          <Text style={styles.taglineText}>"{props.details.tagline}"</Text>
        </View>
      ) : null}
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: `https://image.tmdb.org/t/p/w500${props.details.poster_path}`,
          }}
        />
        <Text style={styles.textDescription}>{props.details.overview}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 15,
    padding: 5,
  },
  image: {
    width: 120,
    height: 200,
  },
  textDescription: {
    flexShrink: 1,
    marginLeft: 10,
  },
  tagline: {
    alignItems: 'center',
    paddingBottom: 15,
  },
  taglineText: {
    fontStyle: 'italic',
  },
});

export default ImageDescription;
