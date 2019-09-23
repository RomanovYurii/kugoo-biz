import React, {Component} from 'react';
import {AsyncStorage, StyleSheet, Text, View} from 'react-native';
import {Router, Scene} from 'react-native-router-flux';
import {Home, Auth, AdminPanel, AddNew, Item, EditExisting, Warranty, Delivery, Contacts} from "./src/pages";
import {Header} from "./src/shared_components";

export default class App extends Component {
    //delete
    // async componentWillMount() {
    //     await AsyncStorage.removeItem('items')
    // }

    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene
                        key="home"
                        component={Home}
                        initial
                        navBar={Header}
                    />
                    <Scene
                        key="auth"
                        component={Auth}
                        navBar={Header}
                    />
                    <Scene
                        key="warranty"
                        component={Warranty}
                        navBar={Header}
                    />
                    <Scene
                        key="delivery"
                        component={Delivery}
                        navBar={Header}
                    />
                    <Scene
                        key="contacts"
                        component={Contacts}
                        navBar={Header}
                    />
                    <Scene
                        key="adminPanel"
                        component={AdminPanel}
                        navBar={Header}
                    />
                    <Scene
                        key="addNew"
                        component={AddNew}
                        navBar={Header}
                    />
                    <Scene
                        key="item"
                        component={Item}
                        navBar={Header}
                    />
                    <Scene
                        key="editExisting"
                        component={EditExisting}
                        navBar={Header}
                    />
                </Scene>
            </Router>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
});
