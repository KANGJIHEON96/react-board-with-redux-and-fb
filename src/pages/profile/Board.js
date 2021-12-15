import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {editContent, removeContent} from '../../modules/boardReducer'
// import Title from '../../components/Title';
import UploadForm from '../../components/UploadForm';
import ImageGrid from '../../components/ImageGrid';
import Modal from '../../components/Modal';

import moment from 'moment';
// Board.js 에서 선택된 값을 state 에서 받아온다.
function Board() {
  const { selectRowData } = useSelector(state => state.boardReducer);
  console.log('selectRowData: ', selectRowData)

  // input 값을 변경할 수 있도록 제어
  const [title, setTitle] = useState(selectRowData.title )
  const [content, setContent] = useState(selectRowData.content)
  
  const [user, setUser] = useState(selectRowData.user)
  const [url, setUrl] = useState(selectRowData.url);

  // input 값 변경될때마다 값을 변경
  // input 값이 변경 될때마다 handleTitle, handleContent 함수를 호출하여 setTitle, setContent 로 실시간 값을 변경해 주고,
  // edit 버튼을 클릭하면 onChange 함수를 호출하게 된다.

  const handleTitle = (e) => {
      setTitle(e.target.value)
  }

  const handleContent = (e) => {
      setContent(e.target.value)
  }
  const handleUser = (e) => {
      setUser(e.target.value)
  }
  // 컴포넌트에서 useDispatch를 사용할 수 있도록 선언
  const dispatch = useDispatch()
  // 디스패치 되고나서 화면 전환을 위해 페이지 이동 시 새로고침하면 기존 데이터가 날아가므로 usehistory 사용
  const history = useHistory()

  const onChange = () => {
      // reducer의 data와 동일한 형식으로 맞춰준다.
      const _inputData = {
          id: selectRowData.id,
          title: title,
          content: content,
          user: user,
      }
      console.log('clickSave :: ', _inputData)
      // 리듀서의 editContent 함수에 변경값 전달
      dispatch(editContent(_inputData))
      // 인풋값 초기화
      setTitle('')
      setContent('')
      setUrl('')
          alert('수정 완료')
      // BoardList 페이지로 이동
      history.push('/')
  }

  const onRemove = () => {
      //리듀서의 removeContent 함수에 삭제할 id값을 디스패치로 전달함.
      //이때 전달할 id 는 useSelector 에서 받아온 id 값을 그대로 사용한다.
      dispatch(removeContent(selectRowData.id))
      // input 값 초기화
      setTitle('')
      setContent('')
      setUrl('')
      alert('삭제 완료')
      history.push('/') // 페이지 이동
  }


  return (
    <>
    <div className="App">
    </div>
    <div>
        <div>
            <div style={{width: '100%' , height: '100%' }}><img src={selectRowData.url} /></div>
            <div>
                <input type='text' className='inputTitle' placeholder='제목' onChange={handleTitle} value={title} />
            </div>
            <div>
                <textarea className='inputContent' placeholder='내용' onChange={handleContent} value={content} />
            </div>
            <div>
            <input type='text' className='inputUser' placeholder='사용자' onChange={handleUser} value={user} />
            </div>
            <div>
            <td>{moment(content.date).format('YYYY-MM-DD, h:mm:ss a')}</td>
           // 분기처리 {/* {data?.date && <td>{moment(data[id].date).format('YYYY-MM-DD, h:mm:ss a')}</td>} */}
                <button type='button' onClick={onChange} className='editBtn'>edit</button>
                <button type='button' onClick={onRemove} className='deleteBtn'>delete</button>
            </div>
            
        </div>
    </div>
    </>
  );
}

export default Board;