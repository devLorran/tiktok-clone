import { View, StyleSheet, Text } from "react-native"

export function New(){
    return (
        <View styles={styles.container}>
            <Text>Página Cadastrar novo Vídeo</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    }
})