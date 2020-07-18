import React from 'react'
import { Platform, View, Text,TouchableOpacity,Button, PermissionsAndroid} from 'react-native';
// import { PERMISSIONS, request } from 'react-native-permissions';

// request(
//     Platform.select({
//         android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
//         ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
//     }),
// );
export default PermissionDemo = () => {
    return (
        <TouchableOpacity onPress={()=>{
            request(
                Platform.select({
                    android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
                    ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
                }),
            );
        }}>
            <Button 
            title = "Ask for permission"
            style = {{backgoundColor: 'green'}}> </Button>
        </TouchableOpacity>
    )
}

 askPermission = ()=>{
    request(
        Platform.select({
            android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
            ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
        }),
    );
    
}

// askonPress = () => {
//     console.log("askonPress")
//     var that = this;
//     //Checking for the permission just after component loaded
//     async function requestCameraPermission() {
//       //Calling the permission function
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.CAMERA,
//         {
//           title: 'AndoridPermissionExample App Camera Permission',
//           message: 'AndoridPermissionExample App needs access to your camera ',
//         }
//       );
//       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//         that.proceed();
//       } else {
//         alert('CAMERA Permission Denied.');
//       }
//     }
//     if (Platform.OS === 'android') {
//       requestCameraPermission();
//     } else {
//       this.proceed();
//     }
//   };