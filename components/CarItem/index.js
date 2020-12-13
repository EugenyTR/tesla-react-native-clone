import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import StyledButton from "../StyledButton";
import styles from './styles';

const CarItem = (props) => {

    const { name, tagline, tagLineCTA, image } = props.car;

    return (
        <View style={styles.carContainer}>
            <ImageBackground
                source={image}
                style={styles.image}
            />
            <View style={styles.titles}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subtitle}>
                    {tagline}
                    {' '}
                    <Text style={styles.subtitleCTA}>{tagLineCTA}</Text>
                </Text>
            </View>
            <View style={styles.buttonsContainer}>
                <StyledButton
                    type='primary'
                    content={"Заказать"}
                    onPress={() => {
                        console.warn('order was pressed');
                    }}
                />
                <StyledButton
                    type='secondary'
                    content={"Модели в наличии"}
                    onPress={() => {
                        console.warn('existing inventonary was pressed');
                    }}
                />
            </View>
        </View>
    );
};

export default CarItem;

