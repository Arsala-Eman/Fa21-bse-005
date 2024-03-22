import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <Greeting name ="arsala"></Greeting>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
function Greeting({name}){
  /**usestate is a function that return an array  */
  const {event,setEvent}=useState("eid");
  console.log(name);
  const onchangeevent = () =>{
    //event="Birthday";
    setEvent("Birthday")
    console.log(event);
  }
  return{
    <>
  <Button title="open"></Button>
  
    <Text> Greeting of {event} from {name}</Text>
    <Button title="changeevent" onPress={onchangeevent}></Button>
    </>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
