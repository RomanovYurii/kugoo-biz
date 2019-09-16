import React, {Component} from 'react';
import {
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import {Drawer} from "./Drawer";
import {Hamburger} from "./Hamburger";

class Header extends Component {
    render() {
        return (
            <View style={{
                height: 80,
                flexDirection: 'row',
                width: '100%',
                backgroundColor: '#000',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 30
            }}>
                <Drawer/>

                <Hamburger/>

                <Image
                    style={{
                        height: 39.84,
                        width: 58.56
                    }}
                    source={require('../../assets/logo.png')}
                />

                <View style={{width: 30}}/>
            </View>
        );
    }
}

export {Header};