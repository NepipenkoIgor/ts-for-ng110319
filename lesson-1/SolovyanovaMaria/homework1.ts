// 1
type snbnus = string | number | boolean | null | undefined | symbol;

const isInArray = (targetArray: snbnus[], ...rest: snbnus[]): boolean => {
    return rest.every(currentElement => targetArray.includes(currentElement));
};

// 2
type sn = string | number;

const summator = (...elements: sn[]): number => {
    return elements.reduce((acc: number, currentElement: sn) => {
        if (typeof(currentElement) === 'string') {
            currentElement = Number(currentElement);
        }
        return acc += currentElement;
    }, 0);
};

// 3
const getUnique = (...array: snbnus[]): snbnus[] => {
    return array.reduce((acc: snbnus[], currentElement: snbnus) =>
        (acc.includes(currentElement) ? acc : [...acc, currentElement]), []);
};

// 4
const toMatrix = (data: snbnus[], rowSize: number): snbnus[][] => {
    return data.map(currentElement => Array(rowSize).fill(currentElement));
};