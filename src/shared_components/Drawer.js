import React, {Component} from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import {deviceHeight, deviceWidth} from './constants'

class Drawer extends Component {
    render() {
        return (
            <View style={{
                position: 'absolute',
                left: 0,
                top: 80,
                zIndex: 1,
                width: deviceWidth,
                height: deviceHeight - 80,
                flexDirection: 'row',
                justifyContent: 'flex-start'
            }}>
                <View style={{
                    height: deviceHeight - 80,
                    width: deviceWidth * 0.6,
                    backgroundColor: '#fff',
                    paddingLeft: 30,
                    paddingTop: 15,
                    alignItems: 'flex-start'
                }}>
                    <TouchableOpacity style={{
                        paddingVertical: 15
                    }}>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: 'bold'
                        }}>
                            Warranty
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        paddingVertical: 15
                    }}>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: 'bold'
                        }}>
                            Delivery
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        paddingVertical: 15
                    }}>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: 'bold'
                        }}>
                            Contacts
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        marginTop: 'auto',
                        paddingBottom: 30,
                        flexDirection: 'row',
                        alignItems: 'bottom'
                    }}>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: 'bold',
                            paddingRight: 5
                        }}>
                            Login
                        </Text>

                        <Image source={require('../../assets/login.png')} style={{width: 16, height: 16}}/>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={{
                    flex: 1,
                    backgroundColor: 'rgba(0,0,0,0.6)',
                }}/>
            </View>
        );
    }
}

export {Drawer};