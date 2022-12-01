const initialState = [];

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "REGISTER":
            return [...state, { email: action.payload.email, password: action.payload.password }]
        default:
            return state;
    }
};