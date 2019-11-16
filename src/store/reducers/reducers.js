function p(x, y) {
    return {x, y};
}

const initialValue = {
    field: {
        points: [
            p(3, 4),
            p(4, 4),
            p(3, 5),
        ],
        width: 10,
        height: 10,
    },
}


export default function reducers(state = initialValue, action) {
    return state;
}
