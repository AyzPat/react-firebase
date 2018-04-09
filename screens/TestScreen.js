import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { TestComponent } from '../components/AppComponents';

export default class TestScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
     <Text>Hello</Text>
     <TestComponent/>
      </View>
    );
  }



}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal:20,
    paddingVertical:10,
    backgroundColor: '#fff',
  },
 
});
