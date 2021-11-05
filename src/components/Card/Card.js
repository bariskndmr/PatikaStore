import React from 'react';
import {View, Text, Image, SafeAreaView} from 'react-native';
import styles from './Card.style';

export default Card = ({products}) => {
    const colorChange = () => {
        if(products.inStock===true){
            stock : {
                color: 'black'
            }
        }
        else {
            stock : {
                color : 'red'
            }
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{uri : products.imgURL}}/>
            </View>
                <View style={styles.textsContainer}>
                    <Text style={styles.title}>{products.title}</Text>            
                    <Text style={styles.price}>{products.price}</Text>
                    <Text style={styles.stock} colorChange >
                        {products.inStock ?  'Stokta var' : 'Stokta yok'}
                    </Text>
                </View>
        </SafeAreaView>
    );
}