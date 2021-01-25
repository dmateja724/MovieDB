import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import MoviesAPI from '../api/MoviesAPI';

const MovieCard = (props) => {
  const handleShowDetails = () => {
    MoviesAPI.getMovieDetails(props.movie.id)
      .then((json) => {
        return json;
      })
      .then((details) => {
        props.showDetails(details);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <TouchableOpacity onPress={handleShowDetails}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.imageBackground}
          resizeMode="cover"
          source={{
            uri: `https://image.tmdb.org/t/p/w500${props.movie.backdrop_path}`,
          }}>
          <View style={styles.topTextContainer}>
            <View style={styles.rating}>
              <Text style={styles.text}>Rating</Text>
              <Text style={styles.text}>{props.movie.vote_average}</Text>
            </View>
          </View>
          <View style={styles.bottomTextContainer}>
            <Text style={styles.title} numberOfLines={1}>
              {props.movie.title}
            </Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
    overflow: 'hidden',
    marginTop: 20,
    height: 200,
  },
  text: {
    fontSize: 14,
    color: 'white',
  },
  rating: {
    alignItems: 'center',
    width: '20%',
    borderRadius: 10,
    backgroundColor: 'rgba(52, 52, 52, 0.6)',
    padding: 5,
  },
  topTextContainer: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'flex-end',
  },
  bottomTextContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    width: '70%',
    borderRadius: 10,
    backgroundColor: 'rgba(52, 52, 52, 0.6)',
    padding: 5,
  },
  title: {
    fontSize: 25,
    color: 'white',
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
});

export default MovieCard;
