import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './input.style';

const Input = () => {
    return (
        <View>
            <TextInput style={styles.input} 
            placeholder='Ara...'
            />
        </View>
    );
}

export default Input;