import React, {Component} from 'react';
import {View, TouchableOpacity} from 'react-native';

const
    Line = () => (
        <View style={{width: 30, height: 2, backgroundColor: '#fff'}}/>
    ),
    Hamburger = () => (
        <TouchableOpacity style={{
            height: 25,
            justifyContent: 'space-between'
        }}>
            <Line/>
            <Line/>
            <Line/>
        </TouchableOpacity>
    )
;

export {Hamburger};