export const searchTxt = (text: string) => {
    return text.replaceAll(/[^a-zA-Z ]/g, "").toLowerCase();
}