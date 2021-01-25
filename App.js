import React, { useState, useEffect } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';

import Header from './src/components/Header';
import HomeScreen from './src/screens/HomeScreen';
import MoviesAPI from './src/api/MoviesAPI';

const App = () => {
  const [popMovies, setPopMovies] = useState(null);

  useEffect(() => {
    MoviesAPI.getPopularMovies()
      .then((json) => {
        return json.results;
      })
      .then((movies) => {
        setPopMovies(movies);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <>
      <SafeAreaView style={{ flex: 0, backgroundColor: 'grey' }} />
      <SafeAreaView style={{ flex: 1, backgroundColor: 'grey' }}>
        <View style={styles.container}>
          <Header title="MovieDB" />
          <HomeScreen data={popMovies} />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: 'white', marginBottom: 50 },
});

export default App;
