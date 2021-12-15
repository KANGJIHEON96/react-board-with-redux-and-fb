import React from 'react';
import { useSelector } from 'react-redux';
 
import ButtonHome from '../components/ButtonHome';
import ButtonWrite from '../components/ButtonWrite';
 
function Footer() {
	// store 의 상태가 바뀔 때마다 상태를 받아온다.
    const uri = useSelector(state => state.uriReducer.inputData)
 
    return(
        <div>
            <hr />
            <nav>
                <ul>
                    <li><ButtonHome /></li>
                    {/* // 받아온 상태가 '/BoardNew' 가 아닐때만 버튼을 보여준다. */}
                    {uri !== '/BoardNew' ?
                        <li><ButtonWrite /></li> : 
                        <li></li>
                    }
                </ul>
            </nav>
        </div>
    );
}
 
export default Footer;

// Footer 컴포넌트에서 store 의 상태가 변경될 때마다 state 를 전달받도록 구독하고, 
// state 에 따라 write 버튼을 보여줄 지 말지 결정할 수 있다.