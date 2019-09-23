import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Alert,
    TouchableWithoutFeedback,
    Keyboard,
    AsyncStorage
} from 'react-native';
import {deviceWidth} from "../shared_components/constants";
import {Actions} from "react-native-router-flux";

class Auth extends Component {
    state = {
        username: '',
        password: ''
    }

    login = async () => {
        if (this.state.username === 'yu_admin' && this.state.password === '34997958Yu') {
            await AsyncStorage.setItem('auth', 'true');
            Actions.replace('adminPanel');
        } else {
            Alert.alert('Error', 'Wrong credentials');
        }
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={{
                    flex: 1,
                    alignItems: 'center'
                }}>
                    <Text style={{
                        fontSize: 20,
                        marginTop: 30,
                        marginBottom: 15
                    }}>
                        Login to admin panel
                    </Text>
                    <TextInput
                        style={{
                            height: 60,
                            width: deviceWidth * 0.8,
                            borderRadius: 10,
                            backgroundColor: '#fff',
                            borderWidth: 1,
                            borderColor: '#000',
                            paddingHorizontal: 10,
                            fontSize: 18,
                            marginVertical: 15
                        }}
                        placeholder={"Login"}
                        textContentType={"username"}
                        onChangeText={username => this.setState({username})}
                        value={this.state.username}
                    />
                    <TextInput
                        style={{
                            height: 60,
                            width: deviceWidth * 0.8,
                            borderRadius: 10,
                            backgroundColor: '#fff',
                            borderWidth: 1,
                            borderColor: '#000',
                            paddingHorizontal: 10,
                            fontSize: 18,
                            marginVertical: 15
                        }}
                        placeholder={"Password"}
                        textContentType={"password"}
                        secureTextEntry={true}
                        onChangeText={password => this.setState({password})}
                        value={this.state.password}
                    />
                    <TouchableOpacity onPress={this.login}>
                        <View style={{
                            width: deviceWidth * 0.5,
                            height: 60,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: '#000',
                            borderRadius: '10%',
                            marginVertical: 15
                        }}>
                            <Text style={{
                                color: '#fff',
                                fontSize: 18
                            }}>
                                Login
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

export {Auth};