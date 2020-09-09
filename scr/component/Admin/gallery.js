import React, { Component } from 'react';
import { View, StatusBar, StyleSheet, ScrollView, ImageBackground, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import Color from './../../constant/color';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import IcIcon from 'react-native-vector-icons/MaterialIcons'
import Arrow from 'react-native-vector-icons/AntDesign'

export default class callRecording extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                { image: require('./../../image/message.png') },
                { image: require('./../../image/message.png') },
                { image: require('./../../image/message.png') },
                { image: require('./../../image/message.png') },
                { image: require('./../../image/message.png') },
                { image: require('./../../image/message.png') },
            ],
        };
    }
    renderRow = ({ item }) => {
        return (
            <TouchableOpacity style={{ marginVertical: hp('2%'), }} onPress={() => { this.props.navigation.navigate('chat') }}>
                <Image source={item.image} style={{ width: 100, height: 100, marginRight: 10, borderRadius: 5 }} resizeMode='stretch' />
            </TouchableOpacity>
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
                            <Text style={styles.callText}>Picture</Text>
                            <Image source={require(' ./../../image/Vector.png')} style={styles.imageFirst} resizeMode='stretch' />
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flexDirection: 'column' }}>
                                <View>
                                    <View style={styles.imageView}>
                                        <TouchableOpacity onPress={() => this.props.navigation.navigate('picture')}>
                                            <Image source={require(' ./../../image/user1.png')} style={styles.user} resizeMode='stretch' />
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => this.props.navigation.navigate('picture')}>
                                            <Image source={require(' ./../../image/user2.png')} style={styles.user} resizeMode='stretch' />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.imageView}>
                                        <TouchableOpacity onPress={() => this.props.navigation.navigate('picture')}>
                                            <Image source={require(' ./../../image/user1.png')} style={styles.user} resizeMode='stretch' />
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => this.props.navigation.navigate('picture')}>
                                            <Image source={require(' ./../../image/user2.png')} style={styles.user} resizeMode='stretch' />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <Text style={{ alignSelf: 'center' }}>Pictures</Text>
                            </View>
                            <View style={{ flexDirection: 'column' }}>
                                <View>
                                    <View style={styles.imageView}>
                                        <TouchableOpacity onPress={() => this.props.navigation.navigate('picture')}>
                                            <Image source={require(' ./../../image/user1.png')} style={styles.user} resizeMode='stretch' />
                                            <View style={{ backgroundColor: '#fff', opacity: 0.5, marginLeft: wp('5%'), marginTop: hp('2%'), position: 'absolute', justifyContent: 'center', alignItems: 'center', width: 30, height: 30, borderRadius: 30 }}>
                                                <Arrow style={{}} name={'caretright'} size={18} color="#000" />
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => this.props.navigation.navigate('picture')}>
                                            <Image source={require(' ./../../image/user1.png')} style={styles.user} resizeMode='stretch' />
                                            <View style={{ backgroundColor: '#fff', opacity: 0.5, marginLeft: wp('5%'), marginTop: hp('2%'), position: 'absolute', justifyContent: 'center', alignItems: 'center', width: 30, height: 30, borderRadius: 30 }}>
                                                <Arrow style={{}} name={'caretright'} size={18} color="#000" />
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.imageView}>
                                        <TouchableOpacity onPress={() => this.props.navigation.navigate('video')}>
                                            <Image source={require(' ./../../image/user1.png')} style={styles.user} resizeMode='stretch' />
                                            <View style={{ backgroundColor: '#fff', opacity: 0.5, marginLeft: wp('5%'), marginTop: hp('2%'), position: 'absolute', justifyContent: 'center', alignItems: 'center', width: 30, height: 30, borderRadius: 30 }}>
                                                <Arrow style={{}} name={'caretright'} size={18} color="#000" />
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => this.props.navigation.navigate('video')}>
                                            <Image source={require(' ./../../image/user1.png')} style={styles.user} resizeMode='stretch' />
                                            <View style={{ backgroundColor: '#fff', opacity: 0.5, marginLeft: wp('5%'), marginTop: hp('2%'), position: 'absolute', justifyContent: 'center', alignItems: 'center', width: 30, height: 30, borderRadius: 30 }}>
                                                <Arrow style={{}} name={'caretright'} size={18} color="#000" />
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <Text style={{ alignSelf: 'center' }}>Videos</Text>
                            </View>
                        </View>
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
    headerView: {
        flexDirection: 'row',
        marginBottom: hp('3%'),

    },
    callText: {
        fontSize: 18
    },
    imageFirst: {
        width: 20,
        marginLeft: wp('5%'),
        height: 20,
        alignSelf: 'center'
    },
    user: {
        width: 50,
        marginLeft: wp('2%'),
        height: 50,
        borderRadius: 20,
        alignSelf: 'center',
    },
    imageView: {
        flexDirection: 'row',
        marginBottom: hp('1%'),
    }
});

