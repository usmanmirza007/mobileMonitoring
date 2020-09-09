import React, { Component } from 'react';
import { View, StatusBar, StyleSheet, ScrollView, ImageBackground, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import Color from './../../constant/color';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import IcIcon from 'react-native-vector-icons/MaterialIcons'
import Delete from 'react-native-vector-icons/MaterialCommunityIcons'


export default class callRecording extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardData: [
                { name: "John Deo", time: "12:40 am", play: "play", duration: "Duration 1 hour 20 mint", deleteIcon: 'delete' },
                { name: "John Deo", time: "12:40 am", play: "play", duration: "Duration 1 hour 20 mint", deleteIcon: 'delete' },
                { name: "John Deo", time: "12:40 am", play: "play", duration: "Duration 1 hour 20 mint", deleteIcon: 'delete' },
                { name: "John Deo", time: "12:40 am", play: "play", duration: "Duration 1 hour 20 mint", deleteIcon: 'delete' },
                { name: "John Deo", time: "12:40 am", play: "play", duration: "Duration 1 hour 20 mint", deleteIcon: 'delete' },
                { name: "John Deo", time: "12:40 am", play: "play", duration: "Duration 1 hour 20 mint", deleteIcon: 'delete' },
                { name: "John Deo", time: "12:40 am", play: "play", duration: "Duration 1 hour 20 mint", deleteIcon: 'delete' },
            ],
        };
    }
    renderRow = ({ item }) => {
        return (
            <View style={styles.card}>
                <View style={styles.dataView}>
                    <View style={styles.nameView}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.time}>{item.time}</Text>
                    </View>
                    <Delete style={{ marginRight: wp('4%'), marginTop: hp('0%'), }} name={item.deleteIcon} size={20} color={Color.greyPrimray}
                        onPress={
                            () => this.props.navigation.navigate('#')} />
                </View>
                <View style={styles.dataView}>
                    <Text style={styles.duration}>{item.duration}</Text>
                    <TouchableOpacity style={styles.playView}>
                        <Text style={styles.play}>{item.play}</Text>
                    </TouchableOpacity>
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
                            <Text style={styles.callText}>Call Recording</Text>
                            <Image source={require('./../../image/call1.png')} style={styles.imageFirst} resizeMode='stretch' />
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
    imageFirst: {
        width: 20,
        marginLeft: wp('5%'),
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
        justifyContent: 'space-between',
        marginHorizontal: wp('5%'),
        marginVertical: hp('1%'),
    },
    name: {
        fontSize: 15,
        marginRight: 10,
    },
    time: {
        fontSize: 10
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

