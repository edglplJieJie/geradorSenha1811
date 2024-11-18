import { View, Text, StyleSheet, Pressable, TouchableOpacity } from "react-native";
 
 
export function ModalPassword({senha, fecharModal}) {
 
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>
                    Senha Gerada
                </Text>
                <Pressable style={styles.innerPassword}>
                    <Text style={styles.text}>{senha}</Text>
                </Pressable>
                <View style={styles.buttonArea}>
                    <TouchableOpacity style={styles.button} onPress={fecharModal}>
                        <Text style={styles.buttonText}>Voltar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonSave}>
                        <Text style={styles.buttonTextSave}>Salvar Senha</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
 
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(24,24,24,0.6)"
    },
    content: {
        backgroundColor: "#FFF",
        width: "85%",
        paddingTop: 24,
        paddingBottom: 24,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#000",
        paddingBottom: 18
    },
    innerPassword: {
        backgroundColor: "#e6e6e6",
        width: "90%",
        padding: 14,
        borderRadius: 8,
    },
    text: {
        textAlign: "center",
        fontWeight: "bold",
    },
    buttonArea: {
        flexDirection: 'row',
        width: "90%",
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop:14,
    },
    button: {
        flex: 1,
        alignItems:"center",
        padding:8,
        borderWidth: 0.1,
        borderRadius: 8,
        marginRight: 5,
        borderColor: "#333",
    },
    buttonSave: {
        flex: 1,
        alignItems:"center",
        padding:8,
        backgroundColor:"#333",
        borderRadius:8
    },
    buttonTextSave:{
        color:"#FFF"
    }
})