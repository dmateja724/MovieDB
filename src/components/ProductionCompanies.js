import React, { Fragment } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ProductionCompanies = (props) => {
  return (
    <>
      {props.details.production_companies.length > 0 ? (
        <>
          <View style={styles.container}>
            {props.details.production_companies.map((company) => (
              <Fragment key={company.id}>
                {company.logo_path ? (
                  <Image
                    style={styles.image}
                    source={{
                      uri: `https://image.tmdb.org/t/p/w500${company.logo_path}`,
                    }}
                  />
                ) : null}
              </Fragment>
            ))}
          </View>
          <View style={styles.container}>
            {props.details.production_companies.map((company) => (
              <Fragment key={company.id}>
                {!company.logo_path ? (
                  <Text style={styles.text}>{company.name} </Text>
                ) : null}
              </Fragment>
            ))}
          </View>
        </>
      ) : (
        <View style={styles.notOnFileContainer}>
          <Text style={styles.notOnFileText}>
            No Production Companies on File
          </Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  image: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  text: {
    marginBottom: 20,
  },
  notOnFileContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  notOnFileText: {
    fontWeight: 'bold',
    padding: 10,
  },
});

export default ProductionCompanies;
