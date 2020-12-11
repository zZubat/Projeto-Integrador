import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const Linha = (props) => {
    return( 
        <View style={styles.container}>
            <View style={styles.left}>
                <Image
                    source={{uri: `https://raw.githubusercontent.com/michelzenatti/prestacaodeservico/master/.github/images/${props.foto}`}}
                    style={{height: 100, width: 100}}
                />
            </View>
            <Text style={styles.nome}>
                {props.nome}
            </Text>
            <View style={styles.footer}>
                <Text>
                    {props.profissao}
                </Text>
                <Text>
                    {props.telefone}
                </Text>
                <Text style={styles.avaliacao}>
                    {props.avaliacao}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 45,
        marginHorizontal: 10,
        borderRadius:10,
        shadowColor:"#000",
        shadowOffset:{
            width:0,
            height:-5
        },
        shadowOpacity: 0.1,
        shadowRadius: 20,
        elevation: 5,
        backgroundColor:"#fff",
        marginHorizontal:10,
        overflow: "hidden"
    },
    foto:{
        width:85,
        height:70
    },
    nome: {
        fontSize:18,
        fontWeight:"bold",
        color:"#494949",
        
    },
    footer: {
        flexDirection: "row",
        justifyContent:"space-between",
        paddingLeft:10 ,
        paddingRight:8 , 
    },
    profissao: {
       
        color: "#999"
    },
    telefone: {
        flexDirection: 'column',
        color: "#37eb34"
    },
    avaliacao: {
        color: "#37eb34"
    }
})

export default Linha;