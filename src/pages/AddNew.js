import React, {Component} from 'react';
import {ScrollView, TextInput, View, Text, TouchableOpacity, Image, AsyncStorage} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import {deviceHeight, deviceWidth} from "../shared_components/constants";
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';
import _ from 'lodash';
import moment from 'moment';
import {Actions} from 'react-native-router-flux';

const styles = {
    input: {
        width: deviceWidth * 0.8,
        backgroundColor: '#fff',
        marginVertical: 10,
        minHeight: 30,
        fontSize: 16,
        paddingHorizontal: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#000'
    }
}

class AddNew extends Component {
    state = {
        images: [],
        title: '',
        price: '',
        description: ''
    }

    constructor(props) {
        super(props);

        if (!!props.idx || props.idx === 0) this.state.idx = props.idx
    }

    async componentWillMount() {
        if (this.state.idx || this.state.idx === 0) {
            let
                items = JSON.parse(await AsyncStorage.getItem('items')),
                {title, price, description, images} = items[this.state.idx]
            ;

            this.setState({
                title,
                price,
                description,
                images
            })
        }
    }

    getPermissionAsync = async () => {
        if (Constants.platform.ios) {
            const {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
            }
        }
    }

    componentDidMount() {
        this.getPermissionAsync();
    }

    render() {
        return (
            <KeyboardAwareScrollView>
                <View style={{
                    alignItems: 'center'
                }}>
                    <Text style={{
                        fontSize: 22,
                        marginTop: 10,
                        fontWeight: 'bold'
                    }}>
                        {this.state.idx || this.state.idx === 0 ? 'Edit item' : 'Create new item'}
                    </Text>

                    <TextInput
                        value={this.state.title}
                        onChangeText={text => this.setState({title: text})}
                        style={styles.input}
                        placeholder={'Title | Название'}
                    />

                    <TextInput
                        value={this.state.price}
                        onChangeText={text => this.setState({price: text})}
                        style={styles.input}
                        placeholder={'Price | Цена'}
                    />

                    <TextInput
                        value={this.state.description}
                        onChangeText={text => this.setState({description: text})}
                        style={[styles.input, {
                            minHeight: 200
                        }]}
                        placeholder={'Description | Описание'}
                        multiline={true}
                        numberOfLines={10}
                    />

                    <ScrollView horizontal={true} style={{
                        width: deviceWidth * 0.8
                    }}>
                        {
                            !_.isEmpty(this.state.images) && this.state.images.map((img, idx) => {
                                return (
                                    <TouchableOpacity key={moment().format('x') * Math.random()} onPress={() => {
                                        const oldImages = this.state.images;
                                        const images = [];

                                        oldImages.map((img, nidx) => {
                                            nidx !== idx ? images.push(img) : null;
                                        })

                                        this.setState({images})
                                    }}>
                                        <Image
                                            style={{
                                                height: 100,
                                                width: 100,
                                                marginVertical: 10,
                                                marginRight: 15,
                                                borderRadius: 10,
                                                borderWidth: 1,
                                                borderColor: '#000'
                                            }}
                                            source={img}
                                            key={moment().format('x')}
                                        />
                                    </TouchableOpacity>
                                )
                            })
                        }
                        <TouchableOpacity style={[styles.input, {
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 100,
                            height: 100,
                            backgroundColor: '#000'
                        }]} onPress={async () => {
                            let result = await ImagePicker.launchImageLibraryAsync({
                                mediaTypes: ImagePicker.MediaTypeOptions.All,
                                base64: true
                            });

                            if (!result.cancelled) {
                                const images = this.state.images;
                                images.unshift({uri: 'data:image/jpg;base64,' + result.base64});
                                this.setState({images})
                            }
                        }}>
                            <Image
                                style={{
                                    height: 30,
                                    width: 30
                                }}
                                source={require('../../assets/plus.png')}
                            />
                            <Text style={{
                                color: '#fff',
                                marginTop: 5
                            }}>
                                Add image
                            </Text>
                        </TouchableOpacity>
                    </ScrollView>

                    <TouchableOpacity style={[styles.input, {
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#000',
                        borderColor: 'transparent',
                        height: 60
                    }]} onPress={async () => {
                        let items = await AsyncStorage.getItem('items');

                        if (items !== null) {
                            items = JSON.parse(items);
                        } else {
                            items = [];
                        }

                        if (this.state.idx || this.state.idx === 0) {
                            const {title, description, images, price} = this.state;

                            items[this.state.idx] = {
                                title,
                                description,
                                images,
                                price
                            };
                        } else {
                            items.unshift(this.state)
                        }

                        await AsyncStorage.setItem('items', JSON.stringify(items));

                        Actions.reset('home');
                    }}>
                        <Text style={{
                            color: '#fff',
                            textTransform: 'uppercase',
                            fontWeight: 'bold'
                        }}>
                            Save
                        </Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAwareScrollView>
        );
    }
}

export {AddNew};