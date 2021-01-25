import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import MovieCard from '../components/MovieCard';

import MovieDetailsModal from '../components/MovieDetailsModal';

const HomeScreen = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [details, setDetails] = useState(null);

  const handleShowDetails = (details) => {
    setDetails(details);
    setIsVisible(true);
  };

  const onCancel = () => {
    setIsVisible(false);
  };

  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={props.data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <MovieCard movie={item} showDetails={handleShowDetails} />
          )}
        />
      </View>
      {isVisible && details ? (
        <MovieDetailsModal
          visible={isVisible}
          onCancel={onCancel}
          details={details}
        />
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginLeft: '5%',
    paddingBottom: 50,
  },
});

export default HomeScreen;
