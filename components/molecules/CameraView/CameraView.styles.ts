import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;


const styles = StyleSheet.create({
    mainCameraContainer: {
        width: screenWidth,
        height: screenHeight / 2,
        alignItems: 'center',
        marginTop: "20%"
    },
    cameraView: {
        width: "90%",
        height: "100%",
        // justifyContent: "center",
        borderRadius: 30,
        overflow: "hidden",
    }
});

export default styles;

