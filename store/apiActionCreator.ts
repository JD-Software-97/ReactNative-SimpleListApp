import { fetchData, fetchSuccess, fetchError } from './apiAction';
import axios from 'axios';

const apiActionCreator = () => (dispatch: any) => {
    dispatch(fetchData())

    return new Promise(() => {
        axios.get('https://www.anapioficeandfire.com/api/characters')
            .then((data) => {
                console.log(data)
                dispatch(fetchSuccess(data.data));
            })
            .catch((err) => {
                console.log(err)
                dispatch(fetchError(err))
            })
    });
};

export default apiActionCreator;