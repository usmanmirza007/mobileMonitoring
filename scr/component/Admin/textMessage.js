import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, FlatList, Modal, TextInput, ImageBackground, TouchableOpacity, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Color from './../../constant/color';
import Left from 'react-native-vector-icons/MaterialIcons';
import Textfile from 'react-native-vector-icons/FontAwesome';
import color from './../../constant/color';
import Delete from 'react-native-vector-icons/MaterialCommunityIcons';
export default class textMessage extends React.Component {
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
        return (
            <TouchableOpacity onPress={() => this.props.navigation.navigate('detailMessage')} style={styles.listView}>
                <View style={styles.innerView}>
                    <Text style={styles.textView}>Jhon Doe</Text>
                    <Text style={{ fontSize: 12 }}>8:10 PM</Text>
                </View>
                <View style={{}}>
                    <Delete style={{ marginRight: 10, }} name={'delete'} size={20} color="grey" />
                </View>
            </TouchableOpacity>
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{ height: hp('9%') }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: wp('5%') }}>
                        <View>
                            <Left style={{ marginLeft: -10 }} name={'keyboard-arrow-left'} size={40} color="#000"
                                onPress={
                                    () => this.props.navigation.goBack()} />
                        </View>
                    </View>
                </View>
                <ScrollView>
                    <View style={styles.main}>
                        
                        <Text style={{ fontSize: 25 }}>Text Messages</Text>
                        <Image style={{ marginHorizontal: wp('4%'), }}
                            source={require('./../../image/msg1.png')}></Image>
                    </View>
                    <FlatList
                        data={this.state.userData}
                        renderItem={this.renderRow}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </ScrollView>
            </View>

        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.backGround,
    },
    main: {
        flexDirection: 'row',
        marginHorizontal: wp('5%'),
        alignItems: 'center',
        marginBottom: 10,

    },
    listView: {
        backgroundColor: Color.white,
        height: hp('8%'),
        marginHorizontal: wp('5%'),
        borderRadius: 10,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'

    },
    textView: {
        fontSize: 15,
        marginHorizontal: wp('5%'),

    },
    innerView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },


});


