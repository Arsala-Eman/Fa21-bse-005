
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import TodoScreen from './src/TodoScreen';
import Fallback from './src/component/Fallback';

export default function App() {
  return (
    <SafeAreaView>
    <View >
      <TodoScreen/>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
});
