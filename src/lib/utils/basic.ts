export function inRange(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function objectArraysStringify(obj: any) {
    for (const key in obj) {
        if (Array.isArray(obj[key])) {
            obj[key] = obj[key].toString();
        }
    }
}

export function hasLength(obj: any) {
    return Object.keys(obj).length;
}