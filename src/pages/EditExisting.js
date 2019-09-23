import React, {Component} from 'react';
import {
    ScrollView,
    View,
    Text,
    Image,
    TextInput,
    AsyncStorage,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard,
    Alert
} from 'react-native';
import {deviceWidth} from "../shared_components/constants";
import _ from 'lodash';
import {Actions} from 'react-native-router-flux';
import moment from "moment";

class EditExisting extends Component {
    state = {
        pattern: '',
        items: []
    }

    async componentWillMount() {
        let items = await AsyncStorage.getItem('items');

        items = items !== null ? JSON.parse(items) : [];

        this.setState({items})
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View>
                    <View style={{
                        width: deviceWidth,
                        backgroundColor: '#fff',
                        height: 60,
                        borderBottomWidth: 1,
                        borderBottomColor: '#000',
                        justifyContent: 'center',
                        paddingHorizontal: 10
                    }}>
                        <Text style={{
                            fontSize: 14,
                            marginTop: -11
                        }}>
                            Search:
                        </Text>

                        <TextInput
                            style={{
                                fontSize: 16
                            }}
                            placeholder={'Start typing the name here'}
                            value={this.state.pattern}
                            onChangeText={pattern => this.setState({pattern})}
                        />
                    </View>

                    <ScrollView containerStyle={{flex: 1}}>
                        {!_.isEmpty(this.state.items) ? this.state.items.map((item, idx) => {
                            if (_.includes(item.title, this.state.pattern))
                                return (
                                    <View style={{
                                        width: deviceWidth,
                                        backgroundColor: '#fff',
                                        height: 60,
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        paddingHorizontal: 25,
                                        marginVertical: 5
                                    }} key={moment().format('x') * Math.random()}>
                                        <TouchableOpacity
                                            onPress={() => Actions.push('addNew', {idx})}
                                            style={{
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                justifyContent: 'flex-start',
                                            }}
                                        >
                                            <Image
                                                style={{
                                                    height: 30,
                                                    width: 30,
                                                    marginRight: 10
                                                }}
                                                source={item.images[0]}
                                            />

                                            <Text>
                                                {item.title}
                                            </Text>
                                        </TouchableOpacity>

                                        <TouchableOpacity style={{
                                            height: 50,
                                            width: 50,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            backgroundColor: '#000',
                                            borderRadius: 7
                                        }} onPress={async () => {
                                            await Alert.alert(
                                                'Warning!',
                                                'Are you sure you want to delete ' + item.title + '?',
                                                [
                                                    {
                                                        text: 'No',
                                                        onPress: () => {
                                                        },
                                                        style: 'cancel',
                                                    },
                                                    {
                                                        text: 'Yes',
                                                        onPress: async () => {
                                                            const items = [];
                                                            this.state.items.map((item, nidx) => {
                                                                if (idx !== nidx) {
                                                                    items.push(item)
                                                                }
                                                            });

                                                            await AsyncStorage.setItem('items', JSON.stringify(items));
                                                            this.setState({items})
                                                        }
                                                    }
                                                ],
                                            )
                                        }}>
                                            <Image
                                                style={{
                                                    height: 25,
                                                    width: 25
                                                }}
                                                source={require('../../assets/delete-button.png')}
                                            />

                                            <Text style={{
                                                color: '#fff',
                                                fontSize: 10
                                            }}>
                                                Delete
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                )
                        }) : <Text>No items found</Text>}
                    </ScrollView>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

export {EditExisting};