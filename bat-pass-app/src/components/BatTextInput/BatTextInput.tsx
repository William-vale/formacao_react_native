import React from "react";
import { TextInput } from "react-native";
import { styles } from "./BatTextInputStyle";

interface IBatTextInputProps {
    pass: string,
}

export function BatTextInput(props: IBatTextInputProps) {
    return (
        <TextInput 
            placeholder="Gerar Senha" 
            style={styles.inputer}
            value={props.pass}
        />
    );
}
