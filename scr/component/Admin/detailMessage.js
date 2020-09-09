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
                            <Text style={styles.callText}>John Doe</Text>
                            <Image source={require(' ./../../image/user.png')} style={styles.imageFirst} resizeMode='stretch' />
                        </View>
                        <View style={styles.dateView}>
                            <Image source={require('./../../image/line1.png')} style={styles.line} resizeMode='stretch' />
                            <Text style={styles.date}>May, 12:50 am</Text>
                            <Image source={require('./../../image/line2.png')} style={styles.line} resizeMode='stretch' />
                        </View>
                        <FlatList
                            horizontal
                            data={this.state.images}
                            renderItem={this.renderRow}
                            keyExtractor={(item, index) => index.toString()}
                        />
                        <View style={styles.dateView}>
                            <Image source={require('./../../image/line1.png')} style={styles.line} resizeMode='stretch' />
                            <Text style={styles.date}>May, 12:50 am</Text>
                            <Image source={require('./../../image/line2.png')} style={styles.line} resizeMode='stretch' />
                        </View>
                        <FlatList
                            horizontal
                            data={this.state.images}
                            renderItem={this.renderRow}
                            keyExtractor={(item, index) => index.toString()}
                        />
                        <View style={styles.dateView}>
                            <Image source={require('./../../image/line1.png')} style={styles.line} resizeMode='stretch' />
                            <Text style={styles.date}>May, 12:50 am</Text>
                            <Image source={require('./../../image/line2.png')} style={styles.line} resizeMode='stretch' />
                        </View>
                        <FlatList
                            horizontal
                            data={this.state.images}
                            renderItem={this.renderRow}
                            keyExtractor={(item, index) => index.toString()}
                        />
                        <View style={styles.dateView}>
                            <Image source={require('./../../image/line1.png')} style={styles.line} resizeMode='stretch' />
                            <Text style={styles.date}>May, 12:50 am</Text>
                            <Image source={require('./../../image/line2.png')} style={styles.line} resizeMode='stretch' />
                        </View>
                        <FlatList
                            horizontal
                            data={this.state.images}
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
    dateView: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    date: {
        alignSelf: 'center',
        color: Color.greyPrimray,
    },
    line: {
        width: 80,
        height: 2,
        marginTop: 4,
        alignSelf: 'center'
    },
    headerView: {
        flexDirection: 'row',
        marginBottom: hp('3%'),

    },
    callText: {
        fontSize: 18
    },
});

