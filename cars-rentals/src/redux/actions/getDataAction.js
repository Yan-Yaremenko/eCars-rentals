import { dataTypes } from '../types'

export const setData = (data) => {
    return {
        type: dataTypes.SET_DATA,
        payload: data
    }
};

export const getDataAsync = () => {
    return function (dispatch) {
        fetch('./data/cars.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Error fetching data');
                }
                return response.json();
            })
            .then((data) => {
                const results = data;
                dispatch(setData(results))
            })
            .catch((err) => {
                console.error("Error fetching data", err)
            })
    }
}