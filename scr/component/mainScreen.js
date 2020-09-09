import React, { Component } from 'react';
import { View, StatusBar, StyleSheet, ImageBackground, Image, Text, TouchableOpacity } from 'react-native';
import Color from './../constant/color';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export default class mainScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={{ marginHorizontal: wp('5%'), }}>
                    <View style={styles.rowView}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('callRecording')} style={styles.mainView}>
                            <Image source={require('./../image/call.png')} style={styles.imageFirst} resizeMode='stretch' />
                            <Text style={styles.test}>Call</Text>
                            <Text style={styles.test}>Recording</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('textMessage')} style={styles.mainView}>
                            <Image source={require('./../image/msg.png')} style={styles.imageFirst} resizeMode='stretch' />
                            <Text style={styles.test}>Test</Text>
                            <Text style={styles.test}>Messages</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('gallery')} style={styles.mainView}>
                            <Image source={require('./../image/folder.png')} style={styles.imageFirst2} resizeMode='stretch' />
                            <Text style={styles.test}>Gallery</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.rowView}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('GPS')} style={styles.mainView}>
                            <Image source={require('./../image/loc.png')} style={styles.imageFirst} resizeMode='stretch' />
                            <Text style={styles.test}>GPS</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('#')} style={styles.mainView}>
                            <Image source={require('./../image/camera.png')} style={styles.imageFirst2} resizeMode='stretch' />
                            <Text style={styles.test}>Camera</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('#')} style={styles.mainView}>
                            <Image source={require('./../image/chat.png')} style={styles.imageFirst} resizeMode='stretch' />
                            <Text style={styles.test}>Facebook</Text>
                            <Text style={styles.test}>Messenger</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.rowView}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('keyLogger')} style={styles.mainView}>
                            <Image source={require('./../image/data.png')} style={styles.imageFirst} resizeMode='stretch' />
                            <Text style={styles.test}>KeyLogger</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('fileReading')} style={styles.mainView}>
                            <Image source={require('./../image/file.png')} style={styles.imageFirst} resizeMode='stretch' />
                            <Text style={styles.test}>File</Text>
                            <Text style={styles.test}>Reading</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('liveAudio')} style={styles.mainView}>
                            <Image source={require('./../image/mic.png')} style={styles.imageFirst1} resizeMode='stretch' />
                            <Text style={styles.test}>Live</Text>
                            <Text style={styles.test}>Audio</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E4F1FF',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    imageFirst: {
        width: 30,
        height: 35,
        marginVertical: hp('3%'),
        alignSelf: 'center'
    },
    imageFirst1: {
        width: 25,
        height: 40,
        marginVertical: hp('3%'),
        alignSelf: 'center'
    },
    imageFirst2: {
        width: 40,
        height: 40,
        marginVertical: hp('3%'),
        alignSelf: 'center'
    },
    test: {
        alignSelf: 'center',
        fontSize: 10
    },
    mainView: {
        backgroundColor: Color.buttonColor,
        borderRadius: 30,
        width: wp('20%'),
        height: hp('20%')
    },
    rowView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: hp('5%'),
    }
});

