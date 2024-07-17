import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        width: '100%',
        paddingTop: 10,
        paddingBottom: 10,
        height: '100%',
        backgroundColor: '#333333',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoContainer: {
        display: 'flex',
        borderColor: '#fff',
        borderWidth: 2,
        backgroundColor: '#4D4D4D',
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 20,
        marginBottom: 10,
        justifyContent: 'center',
        alignSelf: 'center',
      },
      inputContainer: {
        width: '60%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      },
});

export default styles;