import React from 'react';
import { ScrollView, StyleSheet, Modal } from 'react-native';

import DetailsHeader from './DetailsHeader';
import TitleBar from './TitleBar';
import ImageDescription from './ImageDescription';
import RatingsBar from './RatingsBar';
import { Separator } from '../util';
import ProductionCompanies from './ProductionCompanies';
import MovieDetails from './MovieDetails';

const MovieDetailsModal = (props) => {
  return (
    <Modal
      visible={props.visible}
      animationType="slide"
      presentationStyle="pageSheet">
      <DetailsHeader onCancel={props.onCancel} />
      <ScrollView contentContainerStyle={styles.container}>
        <TitleBar details={props.details} />
        <Separator />
        <ImageDescription details={props.details} />
        <Separator />
        <RatingsBar details={props.details} />
        <Separator />
        <MovieDetails details={props.details} />
        <Separator />
        <ProductionCompanies details={props.details} />
      </ScrollView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default MovieDetailsModal;
