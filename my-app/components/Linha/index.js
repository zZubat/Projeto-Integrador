import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Linha = (props) => {
    return( 
        <View style={styles.container}>
            <Text style={styles.nome}>
                {props.nome}
            </Text>
            <View style={styles.footer}>
                <Text>
                    {props.profissao}
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
        marginHorizontal: 10
    },
    nome: {
        fontSize:16,
        fontWeight:"bold",
        color:"#494949",
    },
    footer: {
        flexDirection: "row",
        justifyContent:"space-between",
    },
    profissao: {
        color: "#999"
    },
    avaliacao: {
        color: "#37eb34"
    }
})

export default Linha;