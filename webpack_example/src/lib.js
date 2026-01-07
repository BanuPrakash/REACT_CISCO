export default function filter(elems, predicate) {
    let result = [];
    elems.forEach(elem => {
        if(predicate(elem)) {
            result.push(elem);
        }
    });

    return result;
}

export const add = (x,y) => x + y;
