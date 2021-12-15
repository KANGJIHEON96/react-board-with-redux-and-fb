import React from "react";
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import { selectRow} from '../../modules/boardReducer'


function BoardList() {
    // useselector = 스토어의 원하는 상태에 접근
	// useSelector 로 boardReducer 에 있는 inputData 값을 가져온다. 
    // 먼저 useSelector 를 통해 현재 state 를 받아오고, 
    // 그 값에 따라 list 를 보일 지, 내용이 없다고 나타낼 지 알려준다.
    
    // const { inputData } = useSelector(state => state.boardReducer);

    // const { inputData } = useSelector((state) => {
    //     return state.boardReducer
    // })
    const { inputData } =  useSelector(state => {
        console.log('state: ',state)
        return state.boardReducer
    })



    
    // useSelector 로 boardReducer 에 있는 lastId 값을 가져온다.
    const { lastId } = useSelector(state => state.boardReducer)
    // 클릭한 글의 id를 넘겨주기위해 dispatch를 사용한다.
    const dispatch = useDispatch()
 // 로직 -> 리듀서의 selectRow 함수에게 선택한 아이디값을 넘겨준다.
    const selectContent = (id) => {
        dispatch(selectRow(id))
    }
 
    return(
        <div>
            <h2>게시판</h2>
            <div>
                <table className='listTable'>
                    <tbody>
                        <tr>
                            <td className='listTableIndex th'>순서</td>
                            <td className='listTableTitle th'>제목</td>
                            <td className='listTableContent th'>내용</td>
                            <td className='listTableUser th'>사용자</td>
                            
                        </tr>
                        {lastId !== 0 ? // lastId 가 0이 아닐때만 목록을 보여준다.
                            inputData.map((rowData, i) => (
                                rowData.id !== '' && // rowData의 id 가 ''이 아닐때 목록을 보여준다.
                                <tr key={rowData.id}>
                                    <td className='listTableIndex' onClick={() => selectContent(rowData.id)}>
                                        <Link to='/Board'> {rowData.id}</Link>
                                    </td>
                                    <td className='listTableTitle' onClick={() => selectContent(rowData.id)}><Link to='/Board'>{rowData.title}</Link></td>
                                    <td className='listTableContent'>{rowData.content}</td>
                                    <td className='listTableUser'>{rowData.user}</td>
                                    <td>{rowData.readCount}</td>
                                    {/* <td>
                              {rowData.fileList.length > 0 &&
                                 <img src="/images/board_attach.gif" />
                              }
                           </td> */}
                                </tr>
                            )) :  // 작성된 목록이 없을 때 보여줄 내용
                            <tr>
                                <td className='listTableIndex'>default</td>
                                <td className='listTableTitle noData'>작성된 글이 없습니다.</td>
                                <td className='listTableContent noData'>작성된 내용이 없습니다.</td>
                                <td className='listTableUser noData'>null</td>
                                
                            </tr>
                        }

{/* 
                        {lastId  && inputData.map(rowData => (
                                rowData.id !== '' && // rowData의 id 가 ''이 아닐때 목록을 보여준다.
                                <tr>
                                    <td className='listTableIndex'>{rowData.id}</td>
                                    <td className='listTableTitle'>{rowData.title}</td>
                                </tr>
                            )) 
                            {lastId || <tr>
                                <td className='listTableIndex'></td>
                                <td className='listTableTitle noData'>작성된 글이 없습니다.</td>
                            </tr> } */}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
 
export default BoardList;