import React from "react";
import { TextInput } from "react-native";
import { styles } from "./BatTextInputStyle";

export function BatTextInput() {
    return (
        <TextInput 
            placeholder="Password" 
            style={styles.inputer}
        />
    );
}
