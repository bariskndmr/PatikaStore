import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './Card.style';

export default Card = () => {
    return (
        <View>
            <Image style={styles.image}/>
            <View style={styles.textsContainer}>
                <Text style={styles.title}></Text>            
                <Text style={styles.price}></Text>
                <Text style={styles.stock}></Text>
            </View>
        </View>
    );
}