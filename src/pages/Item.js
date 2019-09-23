import React, {Component} from 'react';
import {View, ScrollView, Text, Image, AsyncStorage, TouchableOpacity} from 'react-native'
import {deviceHeight, deviceWidth} from "../shared_components/constants";
import moment from "moment";
import _ from "lodash";
import {Actions} from 'react-native-router-flux';

class Item extends Component {
    constructor(props) {
        super(props);

        this.state = {
            idx: props.idx,
            title: '',
            price: '',
            images: []
        }
    }

    async componentDidMount() {
        let
            items = JSON.parse(await AsyncStorage.getItem('items')),
            {title, price, description, images} = items[this.state.idx],
            auth = await AsyncStorage.getItem('auth') !== null
        ;

        this.setState({
            title,
            price,
            description,
            images,
            auth
        })
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <ScrollView
                    style={{flex: 1, paddingHorizontal: 15}}
                    alwaysBounceVertical={false}
                >
                    <ScrollView horizontal={true} style={{
                        width: deviceWidth,
                        backgroundColor: '#000',
                        marginLeft: -15
                    }}>
                        {!_.isEmpty(this.state.images) && this.state.images.map((img, idx) => {
                            return (
                                <Image
                                    style={{
                                        width: deviceWidth * 0.6,
                                        height: deviceWidth * 0.6,
                                        marginBottom: deviceWidth * 0.05,
                                        marginHorizontal: deviceWidth * 0.05,
                                        borderRadius: 10
                                    }}
                                    source={img}
                                    key={+moment().format('x') * Math.random()}
                                />
                            )
                        })}
                    </ScrollView>

                    <Text style={{
                        fontSize: 28,
                        fontWeight: 'bold',
                        marginTop: 15
                    }}>
                        {this.state.title}
                    </Text>

                    <Text style={{
                        fontWeight: 'bold'
                    }}>
                        {this.state.price}
                    </Text>

                    <Text style={{
                        marginTop: 30
                    }}>
                        {this.state.description}
                    </Text>
                </ScrollView>

                {this.state.auth && (
                    <TouchableOpacity style={{
                        position: 'absolute',
                        bottom: 30,
                        marginLeft: deviceWidth * 0.5 - 35,
                        height: 70,
                        width: 70,
                        backgroundColor: '#000',
                        borderRadius: 30,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }} onPress={() => Actions.push('addNew', {idx: this.state.idx, fff: 'faaaa'})}>
                        <Image
                            style={{
                                height: 30,
                                width: 30
                            }}
                            source={require('../../assets/edit.png')}
                        />

                        <Text style={{
                            color: '#fff'
                        }}>
                            Edit
                        </Text>
                    </TouchableOpacity>
                )}
            </View>
        );
    }
}

export {Item};