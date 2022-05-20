export default {
    capitalize(value) {
        const text = value.toLowerCase();
        return text[0].toUpperCase() + text.substring(1, value.lenght);
    }
}