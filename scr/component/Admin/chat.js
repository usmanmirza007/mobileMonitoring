import React, { Component } from 'react';
import { View, StatusBar, StyleSheet, ScrollView, ImageBackground, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import Color from './../../constant/color';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import IcIcon from 'react-native-vector-icons/MaterialIcons'

export default class chat extends Component {
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
                <ScrollView>
                    <View style={{ marginHorizontal: wp('5%'), }}>
                        <View style={styles.headerView}>
                            <Text style={styles.callText}>John Doe</Text>
                            <Image source={require(' ./../../image/user.png')} style={styles.imageFirst} resizeMode='stretch' />
                        </View>
                    </View>
                    <View>
                    <Image source={require(' ./../../image/message.png')} style={styles.fullImage} resizeMode='cover' />
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
    fullImage: {
        width: wp('100%'),
        // flex: 1,
        height: hp('100%'),
        // alignSelf: 'center'
    },
    headerView: {
        flexDirection: 'row',
        marginBottom: hp('3%'),

    },
});

