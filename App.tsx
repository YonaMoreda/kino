import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Image, SafeAreaView} from 'react-native';
import PhotoView from "./screens/PhotoView";

export default function App() {
  return (
    <PhotoView image={'../sample-photos/30.heic'}/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
