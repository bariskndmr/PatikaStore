import { Dimensions, StyleSheet } from "react-native";

const window = Dimensions.get('window').width;
export default StyleSheet.create({
    container : {
        width : window / 2,
        borderRadius : 10,
        backgroundColor : '#eceff1',
        margin: 5,
        flex : 1

    },
    imageContainer :{
        alignItems: 'center',
        marginVertical: 5,
    },
    image : {
        width : Dimensions.get('window').width / 2.4,
        height: Dimensions.get('window').height / 4,
        borderRadius : 10,
        resizeMode : 'contain'
    },
    textsContainer : {
        marginHorizontal: 11,
    },
    title : {
        fontSize : 18,
        fontWeight: 'bold'
    },
    price : {
        fontSize: 16,
        fontWeight : '500',
        color: '#808080'
    },
    stock : {

    },
});