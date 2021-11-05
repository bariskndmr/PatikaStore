import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './Card.style';

export default Card = ({products}) => {
    console.log(products);
    return (
        <View>
            <Image style={styles.image} source={{uri : products.imgUrl}}/>
            <View style={styles.textsContainer}>
                <Text style={styles.title}>{products.title}</Text>            
                <Text style={styles.price}>{products.price}</Text>
                <Text style={styles.stock}>{products.inStock}</Text>
            </View>
        </View>
    );
}