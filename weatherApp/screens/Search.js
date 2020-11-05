import * as React from 'react';
import { Appbar, Title } from 'react-native-paper';
import {View, Text} from 'react-native';
import Header from './Header';
const Search = () => {


  return (
    <View style={{flex:1}}>
        <Header name="Search Screen"/>
        <Text>Search screen</Text>
    </View>
  );
};

export default Search;