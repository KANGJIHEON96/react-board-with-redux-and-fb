import React from 'react';
import { Link } from 'react-router-dom';
 
import { useDispatch } from 'react-redux';
import { uriSave } from '../modules/dataReducer';
 
function ButtonHome() {
    const dispatch = useDispatch();
 
    function onClick() {
        dispatch(uriSave('/BoardNew'))
    }
 
    return(
        <Link to='/BoardNew'>
            <button onClick={onClick}>
                Write
            </button>
        </Link>
    );
}
 
export default ButtonHome;

// 위에서 작성한 uriSave() 함수를 호출해줄 버튼 컴포넌트들에 dispatch를 추가해준다.