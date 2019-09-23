import React, {Component} from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import {deviceWidth} from "../shared_components/constants";
import {Actions} from "react-native-router-flux";

class AdminPanel extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={{
                    fontSize: 28,
                    marginBottom: 30,
                    marginTop: -58
                }}>
                    Welcome, Admin!
                </Text>

                <View style={{
                    width: deviceWidth,
                    flexDirection: 'row',
                    justifyContent: 'space-around'
                }}>
                    <TouchableOpacity style={{
                        backgroundColor: '#000',
                        borderRadius: '15%',
                        width: deviceWidth * 0.4,
                        height: deviceWidth * 0.4,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }} onPress={() => Actions.editExisting()}>
                        <Image style={{
                            height: 60,
                            width: 60
                        }} source={require('../../assets/edit.png')}/>
                        <Text style={{
                            color: '#fff',
                            fontSize: 20,
                            fontWeight: 'bold',
                            marginTop: 15
                        }}>
                            Edit existing
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        backgroundColor: '#000',
                        borderRadius: '15%',
                        width: deviceWidth * 0.4,
                        height: deviceWidth * 0.4,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }} onPress={() => {
                        Actions.addNew();
                    }}>
                        <Image style={{
                            height: 60,
                            width: 60
                        }} source={require('../../assets/plus.png')}/>
                        <Text style={{
                            color: '#fff',
                            fontSize: 20,
                            fontWeight: 'bold',
                            marginTop: 15
                        }}>
                            Add new
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export {AdminPanel};