export default function generatePass() {
    let password: string = '';
    let characters: string = 'Aa@$#123456789abcdefghijklmnopqABCDEFGHIJLKMNOPQ!';
    let passWordLength = 12;

    for(let i = 0; i < passWordLength; i++) {
        password += characters.charAt(
            Math.floor(Math.random() * characters.length)
        )
    }

    return password;
}