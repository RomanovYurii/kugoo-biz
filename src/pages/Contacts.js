import React, {Component} from 'react';
import {ScrollView, Text, View, Linking} from "react-native";
import {deviceWidth} from "../shared_components/constants";

class Contacts extends Component {
    link = (href) => {
        Linking.openURL(href);
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{
                    width: deviceWidth,
                    backgroundColor: '#000',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 60,
                    marginBottom: 15,
                    position: 'absolute',
                    zIndex: 1
                }}>
                    <Text style={{
                        fontSize: 18,
                        fontWeight: 'bold',
                        color: '#fff'
                    }}>
                        Фирменный магазин KUGOO UKRAINE
                    </Text>
                </View>

                <ScrollView style={{
                    padding: 15,
                    paddingTop: 75,
                }}>
                    <Text style={{
                        fontSize: 16,
                        textAlign: 'center'
                    }}>
                        ФОП Романов Д.Ю. ИНН 2879208010{'\n'}
                        Украина, Черкассы, ул. Конева, 1 {'\n'}{'\n'}
                        Перед выездом согласуйте наличие по телефону: {'\n'}
                        <Text onPress={() => this.link('tel:+38(063)95-77-111')} style={{
                            color: 'blue'
                        }}>
                            +38 (063) 95-77-111
                        </Text>{'\n'}
                        <Text onPress={() => this.link('tel:+38(093) 670-77-08')} style={{
                            color: 'blue'
                        }}>
                            +38 (093) 670-77-08 {'\n'}{'\n'}
                        </Text>

                        <Text onPress={() => this.link('mailto:info@kugoo.biz')} style={{
                            color: 'blue'
                        }}>
                            info@kugoo.biz{'\n'}{'\n'}
                        </Text>
                        ПН-ВС 10:00-17:00 {'\n'}
                        Гарантийная мастерская {'\n'}
                        г. Черкассы, ул. Героев Днепра, д.19 {'\n'}
                        <Text onPress={() => this.link('tel:+38(063)95-77-111')} style={{
                            color: 'blue'
                        }}>
                            +38 (063) 95-77-111
                        </Text>{'\n'}
                    </Text>
                </ScrollView>
            </View>
        );
    }
}

export {Contacts};