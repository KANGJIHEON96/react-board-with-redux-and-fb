import React from 'react';
import { Link } from 'react-router-dom';
 
import { useDispatch } from 'react-redux';
import { uriSave } from '../modules/dataReducer'
 
function ButtonHome() {
	// 함수형 컴포넌트에서 dispatch 하기 위해 사용
    const dispatch = useDispatch();
 
	// reducer의 uriSave 함수를 호출
    function onClick() {
        dispatch(uriSave('/'))
    }
 
    return(
        <Link to='/'>
            <button onClick={onClick}>
                Home
            </button>
        </Link>
    );
}
 
export default ButtonHome;