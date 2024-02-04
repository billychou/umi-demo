export function wrapInArray(obj: string | string[]) {
    if (typeof obj === "string") {
        return [obj];
    }
    return obj;
}

export function welcomePeople(x: string[] | string) {
    if (Array.isArray(x)) {
        console.log("hello, " + x.join(" and "));
    } else {
        console.log("hello, "  + x);
    }
}
