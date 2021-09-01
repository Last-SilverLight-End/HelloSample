import React, {useState} from 'react';
import { 
  Button,
  Linking,
  StyleSheet,
  Text,
  View
 } from 'react-native';

const App = () => {
const [name,setName] = useState('Prog');
const [session,setSession] = useState({number:1 , title :'state'});
const [current,setCurrent] = useState(true);

  const increaseNumber = () =>{
    setSession({number : session.number+3})
  }
  const onClickHandler = () =>{
    setName('Programming with Prog');
    setSession({number: session.number+2 , title :'Style'});
    setCurrent(false)
  }
  return (
    <View style = {styles.body}>
      <Text style = {styles.text}> Programming with {name} ! </Text>
      <Text style = {styles.text}> This is the session Number {session.number} and about {session.title} </Text>
      <Text style = {styles.text}> {current ? 'current session' : 'next session'} </Text>
      <Button title = 'hello world' onPress = {onClickHandler}> </Button>
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