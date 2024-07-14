import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { CountrySearch } from '../components/CountrySearch';

function CountryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Country</Text>
      <CountrySearch />
    </View>
  );
}

const $titleColor = '#FFFFFF';
const $containerTransparentColor = 'rgba(0, 0, 0, 0.5)';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: $containerTransparentColor,
    paddingBottom: 20
  },
  title: {
    color: $titleColor,
    fontSize: 35,
    fontWeight: 'bold',
    lineHeight: 80,
    textAlign: 'center'
  }
});

export { CountryScreen };
