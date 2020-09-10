import React, { Component } from 'react';
import { View, StatusBar, StyleSheet, ScrollView, ImageBackground, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import Color from './../../constant/color';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import IcIcon from 'react-native-vector-icons/MaterialIcons'

export default class map extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View style={styles.container}>
                 <View style={{ height: hp('9%') }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: wp('5%') }}>
                        <View>
                            <IcIcon style={{ marginLeft: -10 }} name={'keyboard-arrow-left'} size={40} color="#000"
                                onPress={
                                    () => this.props.navigation.goBack()} />
                        </View>
                    </View>
                </View>
                <View style={styles.container1}>
                    <MapView
                        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                        style={styles.map}
                        initialRegion={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.015,
                            longitudeDelta: 0.0121,
                        }}>
                    </MapView>
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
    container1: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
      map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      },
});

