import { getGreeting } from "./api";

const GET_GREETINGS_REQUEST = "GET_GREETINGS_REQUEST";

export const getGreetingRequest = (payload) => ({
    type: GET_GREETINGS_REQUEST,
    payload,
});

export const fetchGreeting = () => async (dispatch) => {
    const data = await getGreeting();
    dispatch(getGreetingRequest(data));
};

const initialState = {
    greeting: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_GREETINGS_REQUEST:
            return action.payload;
        default:
            return state;
    }
};

export default reducer;

