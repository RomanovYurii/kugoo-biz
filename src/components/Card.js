import React from "react";
import {Image, ScrollView, Text, View, TouchableOpacity} from "react-native";
import {deviceWidth} from "../shared_components/constants";
import {Actions} from "react-native-router-flux";

const Card = ({title, subtitle, source, idx}) => (
    <TouchableOpacity style={{
        width: deviceWidth * 0.5,
        alignItems: 'center',
        marginTop: 15
    }} onPress={() => {
        Actions.push('item', {idx})
    }}>
        <Image
            source={source}
            style={{
                height: deviceWidth * 0.3,
                width: deviceWidth * 0.3,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: '#000'
            }}
        />

        <Text style={{
            fontSize: 18,
            fontWeight: 'bold'
        }}>
            {title}
        </Text>

        <Text style={{
            fontSize: 10
        }}>
            {subtitle}
        </Text>
    </TouchableOpacity>
);

export {Card};