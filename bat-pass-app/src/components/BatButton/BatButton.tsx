import React, { useState } from 'react';
import { Text, Pressable } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import generatePass from './../../services/passwordServices';
import { styles } from './BatButtonStyles';
import { BatTextInput } from "../../components/BatTextInput/BatTextInput";

export function BatButton() {
    const [pass, setPass] = useState('');

    function handleGenerateButton() {
        let generateToken = generatePass(); 
        setPass(generateToken);
    }

    function handleCopyButton() {
        Clipboard.setStringAsync(pass);
    }

  return (
    <>  
        <BatTextInput pass={pass}/>

        <Pressable 
            onPress={handleGenerateButton}
            style={styles.buttonPrimary}
        >
            <Text style={styles.buttonGenerate}>Gerar</Text>
        </Pressable>

        <Pressable 
            onPress={handleCopyButton}
            style={styles.buttonPrimary}
        >
            <Text style={styles.buttonGenerate}>⚡ Copiar</Text>
        </Pressable>
    </>
  );
}