type ns = number | string;
type nsb = ns | boolean;
type arr = nsb[];

function isInArray(firstParam: nsb[], ...args: []): boolean {
    for (let i = 0; i < args.length; i++) {
        if (firstParam.indexOf(args[i]) === -1) {
            return false;
        }
    }
    return true;
}

function summator(...args: ns[]): number {
    let result = 0;
    args.forEach(value => {
        const val = Number(value);
        result = result + val;
    });
    return result;
}

function getUnique(...args: nsb[]): nsb[] {
    const result: nsb[] = [];
    args.forEach((value: nsb) => {
        if (result.indexOf(value) === -1) {
            result.push(value);
        }
    });
    return result;
}

function toMatrix(data: nsb[], rowSize: number): arr[] {
    const result: arr[] = [];
    const max = Math.ceil(data.length / rowSize);
    let start = 0;
    let end: number = rowSize;
    for (let i = 0; i < max; i++) {
        result.push(data.slice(start, end));
        start = end;
        end += rowSize;
    }
    return result;
}
