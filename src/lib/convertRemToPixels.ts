
type RemValue = `${number}rem`;
export const convertRemToPixels = (rem: RemValue): number => {
    const remNumberArray = rem.match(/(\d+)/);
    if (remNumberArray && remNumberArray.length > 0) {
        return parseFloat(remNumberArray[0]) * parseFloat(getComputedStyle(document.documentElement).fontSize);
    } else {
        return 0;
    }
}

export default convertRemToPixels;