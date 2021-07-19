module.exports = function check(str, bracketsConfig) {
    const arrayVariables = str.split('');
    let bracketsConfigOneArray = [];
    let bracketsConfigStarts = [];
    let bracketsConfigEnds = [];
    let stackArray = [];

    if (arrayVariables.length % 2) return false;

    bracketsConfig.map(el => {
        bracketsConfigOneArray.push(...el);
        bracketsConfigStarts.push(el[0]);
        bracketsConfigEnds.push(el[1]);
    });

    for (let i = 0; i <= arrayVariables.length - 1; i++) {
        const indexInConfig = bracketsConfigOneArray.indexOf(arrayVariables[i]);
        const indexInStarts = bracketsConfigStarts.indexOf(arrayVariables[i]);
        const indexInEnds = bracketsConfigEnds.indexOf(arrayVariables[i]);

        if (indexInConfig === -1) return false;


        if (indexInStarts > -1 && indexInEnds === -1) {

            stackArray.push(arrayVariables[i])

        } else if (indexInStarts === -1 && indexInEnds > -1) {

            if (stackArray.pop() !== bracketsConfigStarts[indexInEnds]) return false;

        } else if (indexInStarts > -1 && indexInEnds > -1) {

            (stackArray[stackArray.length - 1] !== arrayVariables[i])
                ? stackArray.push(arrayVariables[i])
                : stackArray.pop();

        }
    }

    return (stackArray.length) ? false : true;
}
