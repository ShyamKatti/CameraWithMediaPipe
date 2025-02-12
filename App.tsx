import { StyleSheet, SafeAreaView } from 'react-native';
import CameraView from "./components/molecules/CameraView";

export default function App() {

  return (
      <SafeAreaView style={styles.container}>
        <CameraView />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
  },
});
