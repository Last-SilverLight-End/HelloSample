import React from 'react';
import { 
  Button,
  Linking,
  StyleSheet,
  Text,
  View
 } from 'react-native';

const App = () => {
  return (
    <View style = {styles.body}>
      <Text style = {styles.text}> Programming with me ! </Text>
      <Button title = 'hello world' onPress = {() => {Linking.openURL('https://www.naver.com') } }> </Button>
    </View>
  );
};


const styles = StyleSheet.create({
  text:{
    color : '#ffffff',
    fontSize : 20,
    fontStyle : 'italic',
    margin : 10,
  },
  body:{
    flex : 1,
    backgroundColor: '#0000ff',
    alignItems :'center',
    justifyContent : 'center',

  },
  container:{
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;