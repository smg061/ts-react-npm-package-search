import { useDispatch } from "react-redux";

import {bindActionCreators} from 'redux';

import {actionCreators} from '../state';

//custom hook
export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(actionCreators, dispatch);
    //returns something like {searchRepositories, dispatch(searchRepositories)}
}