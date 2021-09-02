import React, {useState} from 'react';
import { 
  Button,
  Linking,
  StyleSheet,
  Text,
  View
 } from 'react-native';



const App = () => {

  //cosnt [name,setName] = useState('Style Test');
// 2  const [name,setName] = useState('Style Test')
// 1 const [name,setName] = useState('Prog');
// const [session,setSession] = useState({number:1 , title :'state'});
// const [num,setNum] = useState(1); 
// const [current,setCurrent] = useState(true);


  // 2 const onClickHandler = () =>{
  //   setName('Style Test is Done')
  // 1  setName(' Nobody');
  //  setSession({number: session.number+1 , title :'Style'});
  //  setNum(num+5);
  //  setCurrent(false)
  
  return (
    <View style = {styles.body}>
      <View style={styles.row}>
       <View style = {styles.view1}>
       <Text style = {styles.text}>1</Text>
      </View>
      <View style = {styles.view2}>
       <Text style = {styles.text}>2</Text>
      </View>
      <View style = {styles.view3}>
       <Text style = {styles.text}>3</Text>
      </View>
      </View>
      <View style={styles.row}>
       <View style = {styles.view4}>
        <Text style = {styles.text}>4</Text>
       </View>
      </View>
      <View style={styles.row}>
       <View style = {styles.view5}>
        <Text style = {styles.text}>5</Text>
       </View>
      </View>
      <View style={styles.big_row}>
       <View style = {styles.view6}>
        <Text style = {styles.text}>6</Text>
      </View>
      <View style = {styles.view7}>
       <Text style = {styles.text}>7</Text>
      </View>
     </View>
    </View>

    /* 2 <View style = {styles.body}>
      <Text style = {styles.text} >{name}</Text>
      <View style={styles.button}>
      <Button title = "Update State" onPress = {onClickHandler}  ></Button>
      </View>
      
    </View> */


    /* 1 <View style = {styles.body}>
      <Text style = {styles.text}> Programming with {name} ! </Text>
      <Text style = {styles.text}> {num}</Text>
      <Text style = {styles.text}> {current ? 'current session' : 'next session'} </Text>
      <Button title = 'Press Add Button' onPress = {onClickHandler}> </Button>
      <Text style = {styles.text}> This is the session Number {session.number} and about {session.title} </Text> -->
    </View>*/
  );
};

const styles = StyleSheet.create({
  body:{
    flex : 1,
   // flexDirection:'column-reverse',
   flexDirection:'column',
    backgroundColor : '#ffffff',
    alignItems : 'center',
    justifyContent : 'flex-start',
  },
  row:{
    flexDirection : 'row',
    backgroundColor : '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  big_row:{
    flex:1,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  view1:{
    flex:1,
    backgroundColor : '#00ffff',
    alignItems : 'center',
    justifyContent : 'center',
  },
  view2:{
    flex:2,
    backgroundColor : '#ff00ff',
    alignItems : 'center',
    justifyContent : 'center',
  },
  view3:{
    flex:3,
    backgroundColor : '#ffff00',
    alignItems : 'center',
    justifyContent : 'center',
  },
  view4:{
    flex:1,
    backgroundColor : '#ff0000',
    alignItems : 'center',
    justifyContent : 'center',
  },
  view5: {
    flex: 1,
    backgroundColor: '#0fff0f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view6: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view7: {
    flex: 1,
    backgroundColor: '#0000ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 35,
    fontStyle: 'italic',
    margin: 10,
  },
});

/* 2 const styles = StyleSheet.create({
  body : {
   flex:1,
    backgroundColor : '#ffff00',
    alignItems : 'center',
    justifyContent : 'center',
    borderWidth : 10,
    borderColor : '#ff00ff',
    borderRadius: 10,
    
  },
  text : {
    color : '#000000',
    fontSize : 40,
    fontStyle : 'italic',
    margin : 10,
    textTransform:'uppercase',
  },
  button:{
    width : 200,
    height : 60,
  }
}); */

/* 1 const styles = StyleSheet.create({
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
});*/

export default App;