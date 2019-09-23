import React, {Component} from 'react';
import {
    View,
    Image,
    TouchableOpacity,
    AsyncStorage
} from 'react-native';
import {Drawer} from "./Drawer";
import {Hamburger} from "./Hamburger";

class Header extends Component {
    state = {
        drawer: 'none',
        auth: false
    }

    toggleDrawer = async () => {
        let auth = await AsyncStorage.getItem('auth');
        auth = auth !== null;

        this.setState({
            drawer: this.state.drawer === 'none' ? 'flex' : 'none',
            auth
        })
    }

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
                <Drawer display={this.state.drawer} toggle={this.toggleDrawer} auth={this.state.auth}/>

                <TouchableOpacity onPress={this.toggleDrawer}>
                    <Hamburger/>
                </TouchableOpacity>

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