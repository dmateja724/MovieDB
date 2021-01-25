import React from 'react';
import { View, StyleSheet } from 'react-native';

const Separator = () => <View style={styles.separator} />;

const formatCurrency = (amount) => {
  return Number(amount)
    .toFixed(2)
    .replace(/\d(?=(\d{3})+\.)/g, '$&,');
};

const styles = StyleSheet.create({
  separator: {
    marginVertical: 10,
    borderTopColor: 'rgba(187, 187, 187, 1)',
    borderTopWidth: 1,
  },
});

export { Separator, formatCurrency };
