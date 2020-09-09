import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, FlatList, Modal, TextInput, ImageBackground, TouchableOpacity, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Color from './../../constant/color';
import Left from 'react-native-vector-icons/MaterialIcons';
import Textfile from 'react-native-vector-icons/FontAwesome';
import color from './../../constant/color';
import Delete from 'react-native-vector-icons/MaterialCommunityIcons';
export default class liveAudio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: [
                { name: 'Jhon Doe', time: '8:40 PM', deleteIcon: 'delete' },
                { name: 'Jhon Doe', time: '8:40 PM', deleteIcon: 'delete' },
                { name: 'Jhon Doe', time: '8:40 PM', deleteIcon: 'delete' },
                { name: 'Jhon Doe', time: '8:40 PM', deleteIcon: 'delete' },
                { name: 'Jhon Doe', time: '8:40 PM', deleteIcon: 'delete' },
                { name: 'Jhon Doe', time: '8:40 PM', deleteIcon: 'delete' },
                { name: 'Jhon Doe', time: '8:40 PM', deleteIcon: 'delete' },
                { name: 'Jhon Doe', time: '8:40 PM', deleteIcon: 'delete' },
                { name: 'Jhon Doe', time: '8:40 PM', deleteIcon: 'delete' },
                { name: 'Jhon Doe', time: '8:40 PM', deleteIcon: 'delete' },
            ]
        };
    }
    renderRow = ({ item }) => {
        return (<View style={styles.listView}>
            <View style={styles.innerView}>
                <Text style={styles.textView}>Jhon Doe</Text>
                <Text style={{ fontSize: 12 }}>8:10 PM</Text>
            </View>
            <View style={styles.micView}>
                <Image style={styles.micImage}
                    source={require('../../image/mic.png')} />
                <TouchableOpacity style={styles.opacityListen}>
                    <Text style={{ fontSize: 10, textAlign: 'center' }}>Listen</Text>
                </TouchableOpacity>
            </View>
        </View>
        )
    }
    render() {
        return (
            <View style={styles.container}>

                <View style={{ height: hp('9%'), }}>
                    <View style={{ marginHorizontal: wp('5%'), marginTop: hp('2%'), }}>
                        <Left style={{ marginLeft: -10, }} name={'keyboard-arrow-left'} size={40} color="#000"
                            onPress={
                                () => this.props.navigation.goBack()} />
                    </View>
                </View>
                <ScrollView>
                    <View style={styles.main}>
                        <View style={{flexDirection:'row'}}>
                        <Text style={{ fontSize: 25 ,}}>Live Audio</Text>
                        <Image style={{ marginHorizontal: wp('5%'),height:30, }}
                            source={require('./../../image/mic.png')}/>
                            </View>
                             <FlatList
                            data={this.state.userData}
                            renderItem={this.renderRow}
                            keyExtractor={(item, index) => index.toString()}
                             />
                    </View>
                </ScrollView>
            </View >

        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.backGround,
    },
    main: {
        marginBottom: 10,
        marginHorizontal:wp('5%'),

    },
    listView: {
        backgroundColor: Color.white,
        height: hp('10%'),
        borderRadius: 10,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'

    },
    textView: {
        fontSize: 15,
        marginHorizontal: wp('5%'),
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    micImage: {
        // marginHorizontal: wp('10%'),
        resizeMode: 'stretch',
        height: 20,
        width: 11,
    },
    micView: {
        marginHorizontal: wp('5%'),
        alignItems: 'center',
        justifyContent: 'center',
    },
    opacityListen: {
        borderRadius: 4,
        height: hp('2.5%'),
        width: wp('10%'),
        backgroundColor: '#CCFF00',
        marginTop:5
    }

});


