import React, {Component} from 'react';
import {ScrollView, View, Text, Image, AsyncStorage} from 'react-native';
import {Card} from "../components";
import _ from 'lodash';
import moment from 'moment';

class Home extends Component {
    state = {
        items: []
    }

    async componentWillMount() {
        this.setState({
            items: JSON.parse(await AsyncStorage.getItem('items') || '[]')
        })
    }

    render() {
        return (
            <ScrollView style={{
                flex: 1
            }}>
                <View style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-around'
                }}>
                    {!_.isEmpty(this.state.items) ? this.state.items.map(({title, price, images}, idx) => {
                        return <Card
                            title={title}
                            subtitle={price}
                            source={images[0]}
                            key={moment().format('x') * Math.random()}
                            idx={idx}
                        />
                    }) : (
                        <Text style={{
                            fontSize: 18,
                            marginTop: 15
                        }}>
                            No scooters are currently available
                        </Text>
                    )}
                </View>
            </ScrollView>
        );
    }
}

export {Home};