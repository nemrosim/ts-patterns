const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * Math.floor(max));
}

export const createArray = (maxValue: number): Array<number> => {
    const foo = [0]; // create an empty array with length 45

    for (let i = 0; i < maxValue; i++) {
        const int = getRandomInt(maxValue);
        foo.push(int);
    }

    return foo;
}

export const bubbleSort = (array: Array<number>) => {
    let temp = 0;

    for (let i = 0; i < array.length; i++) {
        for (let j = 1; j < (array.length - i); j++) {

            const previousValue = array[j - 1];
            const currentValue = array[j];

            if (previousValue > currentValue) {

                // previous value
                array[j - 1] = currentValue;

                //current value
                array[j] = previousValue;
            }
        }

    }
}
