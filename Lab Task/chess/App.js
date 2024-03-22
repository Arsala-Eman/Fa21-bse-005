import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
   <View style={{styles.container}}></View>
   

  );
}
 
/**in react native the division is always in top to bottom  for change direction we use flex direction */
/**justifyContent: the placement of child 
 * <><View Style={{ flex: 1, backgroundColor: "yellow" }}>
      <View Style={{ flex: 1, backgroundColor: "red" }}></View>
      <View Style={{ flex: 2, backgroundColor: "green" }}></View>

    </View>
    <View Style={{ flex: 1, backgroundColor: "red" ,flexDirection:"row"}}></View></>
 * alignself has same as alignitem 
 * https://reactnative.dev/docs/flexbox
 */
const styles = StyleSheet.create({
  container:{
    flexDirection:"column",
    flex:1,
    borderWidth:5,
    borderColor:"brown",
  },
  row:{
    flexDirection:"row"
  },
  square:{
    aspectRatio:1,
    justifyContent:"center",
    alignItems:"center",
  }

});
