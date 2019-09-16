import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Router, Scene} from 'react-native-router-flux';
import {Home} from "./src/pages";
import {Header} from "./src/shared_components";

export default function App() {
    return (
        <Router>
            <Scene key="root">
                <Scene
                    key="home"
                    component={Home}
                    initial
                    navBar={Header}
                />
            </Scene>
        </Router>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
});
