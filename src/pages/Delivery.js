import React, {Component} from 'react';
import {View, ScrollView, Text} from 'react-native';
import {deviceWidth} from "../shared_components/constants";

class Delivery extends Component {
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
                        fontSize: 24,
                        fontWeight: 'bold',
                        color: '#fff'
                    }}>
                        Доставка и оплата
                    </Text>
                </View>

                <ScrollView style={{
                    padding: 15,
                    paddingTop: 75,
                }}>
                    <Text style={{
                        fontSize: 16
                    }}>
                        <Text style={{fontWeight: 'bold'}}>
                            Доставка по Киеву
                        </Text> осуществляется в течение дня, оплата
                        происходит в момент получения.
                        <Text style={{fontWeight: 'bold'}}>
                            {'\n'}{'\n'}Доставка по Украине
                        </Text> осуществляется от 1 до 3 дней при{' '}
                        <Text style={{fontWeight: 'bold'}}>
                            полной предоплате.
                        </Text> Оплатить можно на расчетный счет компании или через онлайн банк.{'\n'}{'\n'}
                        <Text style={{fontWeight: 'bold'}}>
                            Оплата{'\n'}
                        </Text>
                        Оплата через платежный сервис LiqPay{'\n'}{'\n'}Возможна оплата в рассрочку на 6 месяцев от
                        ПриватБанка. {'\n'}Оплата будет происходит через выставление
                        инвойса на E-mail через LiqPay{'\n'}{'\n'}Возможен наложенный платеж при получении товара на
                        Новой Почте, в таком случае оплачивается залоговая стоимость транспортировки в обе
                        стороны.{'\n'}{'\n'}Возможна оплата наличными, курьеру после осмотра и доставки
                        самоката.{'\n'}{'\n'}
                    </Text>
                </ScrollView>
            </View>
        );
    }
}

export {Delivery};