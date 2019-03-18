function isInArray(firstParam: any[], ...args: []): boolean {
    for (let i = 0; i < args.length; i++) {
        if (firstParam.indexOf(args[i]) === -1) {
            return false;
        }
    }

    return true;
}

function summator(...args: (number | string)[]): number {
    let result = 0;

    args.forEach(value => {
        const val = Number(value);
        result = result + val;
    });

    return result;
}

function getUnique(...args: any[]): any[] {
    const result: any[] = [];

    args.forEach((value: any) => {
        if (result.indexOf(value) === -1) {
            result.push(value);
        }
    });

    return result;
}

function toMatrix(data: [], rowSize: number): any[] {
    const result: any[] = [];
    const max = Math.ceil(data.length / rowSize);
    let start = 0;
    let end = rowSize;

    for (let i = 0; i < max; i++) {
        result.push(data.slice(start, end));
        start = end;
        end += rowSize;
    }

    return result;
}
