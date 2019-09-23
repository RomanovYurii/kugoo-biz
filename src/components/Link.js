import React, {Component} from 'react';
import {Text, Linking} from 'react-native';

const a = ({children, href}) => (
    <Text onPress={() => Linking.openURL(href)}>{children}</Text>
);

export {a};