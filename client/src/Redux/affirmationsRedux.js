import { API_URL } from "../config";

const reducerName = 'affirmation';
const createActionName = name => `app/${reducerName}/${name}`;
const RANDOM_AFFIRMATION = createActionName('RANDOM_AFFIRMATION');

export const getRandom = payload => ({payload, type: RANDOM_AFFIRMATION});

export const fetchAffirmation = () => {
    return(dispatch) => {
        fetch(`${API_URL}/${reducerName}`)
        .then(res => res.json())
        .then(elm => {
            dispatch(getRandom(elm))
        })
    }
};

const AffirmationsReducer = (statePart = [], action) => {
    switch (action.type) {
        case RANDOM_AFFIRMATION:
            return action.payload;
        default:
            return statePart;
    }
};

export default AffirmationsReducer;