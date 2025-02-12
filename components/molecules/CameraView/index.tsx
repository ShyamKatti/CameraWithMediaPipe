import { useEffect, useState } from 'react';
import { View, Text } from "react-native";
import {Camera, useCameraDevice, useCameraDevices} from 'react-native-vision-camera';
import styles from './CameraView.styles';


const CameraView = ({}) => {
    const [permission, hasPermission] = useState(false);
    const device = useCameraDevice('back');
    console.log(device);

    const invokeCameraPermission = async () => {
        try {
            const permission = await Camera.requestCameraPermission();
            console.log(permission);
            hasPermission(true);
        } catch(ce) {
            console.log(ce);
            hasPermission(false);
        }
    }

    useEffect(() => {
        invokeCameraPermission();
    }, []);



    return (
        <View style={styles.mainCameraContainer}>
            {permission && (
                <Camera style={styles.cameraView}
                        device={device}
                        isActive={true}
                />
            )}
            {!permission && <Text>No permission</Text>}
        </View>
    )
}

export default CameraView;



