import React, { Component } from 'react';
import { View, StatusBar, StyleSheet, ScrollView, ImageBackground, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import Color from './../../constant/color';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import IcIcon from 'react-native-vector-icons/MaterialIcons'
import Location from 'react-native-vector-icons/Entypo'


export default class GPS extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardData: [
                { name: "John Deo", time: "12:40 am", play: "play", duration: "Duration 1 hour 20 mint", deleteIcon: 'delete', location: 'location-pin' },
                { name: "John Deo", time: "12:40 am", play: "play", duration: "Duration 1 hour 20 mint", deleteIcon: 'delete', location: 'location-pin' },
                { name: "John Deo", time: "12:40 am", play: "play", duration: "Duration 1 hour 20 mint", deleteIcon: 'delete', location: 'location-pin' },
                { name: "John Deo", time: "12:40 am", play: "play", duration: "Duration 1 hour 20 mint", deleteIcon: 'delete', location: 'location-pin' },
                { name: "John Deo", time: "12:40 am", play: "play", duration: "Duration 1 hour 20 mint", deleteIcon: 'delete', location: 'location-pin' },
                { name: "John Deo", time: "12:40 am", play: "play", duration: "Duration 1 hour 20 mint", deleteIcon: 'delete', location: 'location-pin' },
                { name: "John Deo", time: "12:40 am", play: "play", duration: "Duration 1 hour 20 mint", deleteIcon: 'delete', location: 'location-pin' },
            ],
        };
    }
    renderRow = ({ item }) => {
        return (
            <View style={styles.card}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'column' }}>
                        <View style={styles.dataView}>
                            <View style={styles.nameView}>
                                <Text style={styles.name}>{item.name}</Text>
                                <Text style={styles.border}></Text>
                                <Text style={styles.time}>{item.time}</Text>
                            </View>
                        </View>
                        <View style={styles.dataView}>
                            <View style={styles.locationView}>
                                <Location style={{ marginRight: wp('4%'), marginTop: hp('0%'), }} name={item.location} size={20} color={Color.greyPrimray}
                                    onPress={
                                        () => this.props.navigation.navigate('#')} />
                                <Text style={styles.duration}>{item.duration}</Text>
                            </View>
                        </View>
                    </View>
                    <Image source={require('./../../image/line.png')} style={styles.imageFirst} resizeMode='stretch' />
                </View>

            </View>
        )
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
                <ScrollView>
                    <View style={{ marginHorizontal: wp('5%'), }}>
                        <View style={styles.headerView}>
                            <Text style={styles.callText}>GPS</Text>
                            <Image source={require('./../../image/loc.png')} style={styles.imageFirst1} resizeMode='stretch' />
                        </View>
                        <FlatList
                            data={this.state.cardData}
                            renderItem={this.renderRow}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>
                </ScrollView>
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
    imageFirst1: {
        width: 20,
        marginLeft: wp('5%'),
        height: 20,
        alignSelf: 'center'
    },
    imageFirst: {
        width: 25,
        marginRight: wp('4%'),
        height: 20,
        alignSelf: 'center'
    },
    headerView: {
        flexDirection: 'row'
    },
    callText: {
        fontSize: 18
    },
    card: {
        backgroundColor: Color.white,
        height: hp('15%'),
        borderRadius: 10,
        justifyContent: 'center',
        marginVertical: hp('2%'),
    },
    nameView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    dataView: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        marginHorizontal: wp('5%'),
        marginVertical: hp('1%'),
    },
    name: {
        fontSize: 10,
        marginRight: 0,

    },
    locationView: {
        flexDirection: 'row'
    },
    border: {
        borderRightColor: Color.greyPrimray,
        marginHorizontal: 10,
        borderRightWidth: 2,
        height: 10
    },
    time: {
        fontSize: 10,

    },
    playView: {
        backgroundColor: Color.yallow,
        width: wp('13%'),
        height: hp('4%'),
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',

    },
    play: {
        color: Color.white
    },
    duration: {
        fontSize: 12,
        color: Color.greyPrimray
    }
});

