import React, {Component} from 'react';
import {View, TouchableOpacity, Text, Image, AsyncStorage} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {deviceHeight, deviceWidth} from './constants';

const Drawer = ({display, toggle, auth}) => (
    <View style={{
        position: 'absolute',
        left: 0,
        top: 80,
        zIndex: 1,
        width: deviceWidth,
        height: deviceHeight - 80,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        display
    }}>
        <View style={{
            height: deviceHeight - 80,
            width: deviceWidth * 0.6,
            backgroundColor: '#fff',
            paddingLeft: 30,
            paddingTop: 15,
            alignItems: 'flex-start'
        }}>
            {
                auth && (
                    <TouchableOpacity style={{
                        paddingVertical: 15,
                        paddingBottom: 45
                    }} onPress={() => {
                        toggle();
                        Actions.replace('adminPanel');
                    }}>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: 'bold'
                        }}>
                            Admin panel
                        </Text>
                    </TouchableOpacity>
                )
            }

            <TouchableOpacity style={{
                paddingVertical: 15
            }} onPress={() => {
                toggle();
                Actions.replace('home');
            }}>
                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold'
                }}>
                    Catalogue
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{
                paddingVertical: 15
            }} onPress={() => {
                toggle();
                Actions.replace('warranty')
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
            }} onPress={() => {
                toggle();
                Actions.replace('delivery')
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
            }} onPress={() => {
                toggle();
                Actions.replace('contacts')
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
                alignItems: 'center'
            }} onPress={auth ? async () => {
                await AsyncStorage.removeItem('auth');
                toggle();
                Actions.replace('home');
            } : () => {
                toggle();
                Actions.replace('auth');
            }}>
                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    paddingRight: 15
                }}>
                    {auth ? 'Logout' : 'Login'}
                </Text>

                <Image
                    source={auth ? require('../../assets/logout.png') : require('../../assets/enter.png')}
                    style={{
                        width: 20,
                        height: 20
                    }}
                />
            </TouchableOpacity>
        </View>

        <TouchableOpacity style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.6)',
        }} onPress={toggle} activeOpacity={1}/>
    </View>
);

export {Drawer};