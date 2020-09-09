import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, FlatList, Modal, TextInput, ImageBackground, TouchableOpacity, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Color from './../../constant/color';
import Left from 'react-native-vector-icons/MaterialIcons';
import Database from 'react-native-vector-icons/FontAwesome';
export default class keyLogger extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View style={styles.container}>

                <View style={{ height: hp('9%'), }}>
                    <View style={{ marginHorizontal: wp('5%'), marginTop: hp('2%'), }}>
                        <Left style={{ marginLeft: -10, marginTop: -5, }} name={'keyboard-arrow-left'} size={40} color="#000"
                            onPress={
                                () => this.props.navigation.goBack()} />
                    </View>
                </View>
                <ScrollView>
                    <View style={styles.main}>
                        <Text style={{ fontSize: 25 }}>Keylogger</Text>
                        <Database style={{ marginLeft: 10, }} name={'database'} size={30} color="#000" />
                    </View>
                    <View style={styles.loggerview1}>
                        <View style={styles.innerviewlogger1}>
                            <Text style={{ fontSize: 20 }}>Lorem</Text>
                        </View>
                        <View style={styles.innerviewlogger2}>
                            <Text style={{ fontSize: 20 }}>Lorem ipsumscskds</Text>
                        </View>
                    </View>
                    {/* view second  */}
                    <View style={styles.loggerview1}>
                        <View style={styles.innerviewlogger3}>
                            <Text style={{ fontSize: 20 }}>Loremdcxs</Text>
                        </View>
                        <View style={styles.innerviewlogger4}>
                            <Text style={{ fontSize: 20 }}>mLord</Text></View>
                        <View style={styles.innerviewlogger5}>
                            <Text style={{ fontSize: 20 }}>Loremc</Text></View>
                    </View>
                    <View style={styles.loggerview1}>
                        <View style={styles.innerviewlogger1}>
                            <Text style={{ fontSize: 20 }}>Lorem</Text>
                        </View>
                        <View style={styles.innerviewlogger2}>
                            <Text style={{ fontSize: 20 }}>Lorem ipsumscskds</Text>
                        </View>
                    </View>
                    <View style={styles.loggerview1}>
                        <View style={styles.innerviewlogger3}>
                            <Text style={{ fontSize: 20 }}>Loremdcxs</Text>
                        </View>
                        <View style={styles.innerviewlogger4}><Text style={{ fontSize: 20 }}>mLord</Text></View>
                        <View style={styles.innerviewlogger5}><Text style={{ fontSize: 20 }}>Loremc</Text></View>
                    </View>
                    <View style={styles.loggerview1}>
                        <View style={styles.innerviewlogger1}>
                            <Text style={{ fontSize: 20 }}>Lorem</Text>
                        </View>
                        <View style={styles.innerviewlogger2}>
                            <Text style={{ fontSize: 20 }}>Lorem ipsumscskds</Text>
                        </View>
                    </View>
                    <View style={styles.loggerview1}>
                        <View style={styles.innerviewlogger3}>
                            <Text style={{ fontSize: 20 }}>Loremdcxs</Text>
                        </View>
                        <View style={styles.innerviewlogger4}>
                            <Text style={{ fontSize: 20 }}>mLord</Text></View>
                        <View style={styles.innerviewlogger5}>
                            <Text style={{ fontSize: 20 }}>Loremc</Text></View>
                    </View>
                    <View style={styles.loggerview1}>
                        <View style={styles.innerviewlogger1}>
                            <Text style={{ fontSize: 20 }}>Lorem</Text>
                        </View>
                        <View style={styles.innerviewlogger2}>
                            <Text style={{ fontSize: 20 }}>Lorem ipsumscskds</Text>
                        </View>
                    </View>
                    <View style={styles.loggerview1}>
                        <View style={styles.innerviewlogger3}>
                            <Text style={{ fontSize: 20 }}>Loremdcxs</Text>
                        </View>
                        <View style={styles.innerviewlogger4}>
                            <Text style={{ fontSize: 20 }}>mLord</Text></View>
                        <View style={styles.innerviewlogger5}>
                            <Text style={{ fontSize: 20 }}>Loremc</Text></View>
                    </View>
                    <View style={styles.loggerview1}>
                        <View style={styles.innerviewlogger1}>
                            <Text style={{ fontSize: 20 }}>Lorem</Text>
                        </View>
                        <View style={styles.innerviewlogger2}>
                            <Text style={{ fontSize: 20 }}>Lorem ipsumscskds</Text>
                        </View>
                    </View>
                    <View style={styles.loggerview1}>
                        <View style={styles.innerviewlogger3}>
                            <Text style={{ fontSize: 20 }}>Loremdcxs</Text>
                        </View>
                        <View style={styles.innerviewlogger4}>
                            <Text style={{ fontSize: 20 }}>mLord</Text></View>
                        <View style={styles.innerviewlogger5}>
                            <Text style={{ fontSize: 20 }}>Loremc</Text></View>
                    </View>
                    <View style={styles.loggerview1}>
                        <View style={styles.innerviewlogger1}>
                            <Text style={{ fontSize: 20 }}>Lorem</Text>
                        </View>
                        <View style={styles.innerviewlogger2}>
                            <Text style={{ fontSize: 20 }}>Lorem ipsumscskds</Text>
                        </View>
                    </View>
                    <View style={styles.loggerview1}>
                        <View style={styles.innerviewlogger3}>
                            <Text style={{ fontSize: 20 }}>Loremdcxs</Text>
                        </View>
                        <View style={styles.innerviewlogger4}>
                            <Text style={{ fontSize: 20 }}>mLord</Text></View>
                        <View style={styles.innerviewlogger5}>
                            <Text style={{ fontSize: 20 }}>Loremc</Text></View>
                    </View>
                    <View style={styles.loggerview1}>
                        <View style={styles.innerviewlogger1}>
                            <Text style={{ fontSize: 20 }}>Lorem</Text>
                        </View>
                        <View style={styles.innerviewlogger2}>
                            <Text style={{ fontSize: 20 }}>Lorem ipsumscskds</Text>
                        </View>
                    </View>
                    <View style={styles.loggerview1}>
                        <View style={styles.innerviewlogger3}>
                            <Text style={{ fontSize: 20 }}>Loremdcxs</Text>
                        </View>
                        <View style={styles.innerviewlogger4}
                        ><Text style={{ fontSize: 20 }}>mLord</Text></View>
                        <View style={styles.innerviewlogger5}
                        ><Text style={{ fontSize: 20 }}>Loremc</Text></View>
                    </View>
                </ScrollView>
            </View>

        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.backGround,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    main: {
        flexDirection: 'row',
        marginHorizontal: wp('5%'),
        width: wp('100%'),
        alignItems: 'center',

    },
    loggerview1: {
        height: hp('5%'),
        marginTop: 20,
        marginBottom: 10,
        width: wp('100%'),
        marginHorizontal: wp('5%'),
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    innerviewlogger1: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Color.white,
        borderRadius: 8,
        height: hp('6%'),
        width: wp('30%'),

    },
    innerviewlogger2: {
        backgroundColor: Color.white,
        borderRadius: 8,
        height: hp('6%'),
        width: wp('58%'),
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 40,
    },
    innerviewlogger3: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Color.white,
        borderRadius: 8,
        height: hp('6%'),
        width: wp('35%'),

    },
    innerviewlogger4: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Color.white,
        borderRadius: 8,
        height: hp('6%'),
        width: wp('21%'),

    },
    innerviewlogger5: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Color.white,
        borderRadius: 8,
        height: hp('6%'),
        width: wp('30%'),
        marginRight: 40

    },

});


