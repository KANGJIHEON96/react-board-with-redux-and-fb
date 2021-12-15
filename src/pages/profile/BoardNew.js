import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { dataSave } from '../../modules/boardReducer';
import { uriSave } from '../../modules/dataReducer'
import { useHistory } from 'react-router-dom';
// import UploadImage from '../components/UploadImage'
import UploadForm from '../../components/UploadForm';
import useStorage from '../../hooks/useStorage';
import { projectStorage, projectFirestore, timestamp } from '../../firebase/config';


function BoardNew() {
	// title, content 를 제어하기 위해 선언
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [user, setUser] = useState('')

    const [test, setTest] = useState(null) // 1


    const [imageUrl, setImageUrl] = useState('');
 
	// 함수형 컴포넌트에서 useDispatch 사용을 위해 선언
    const dispatch = useDispatch();
    
    //data dispatch 후 list 페이지로 이동하기 위해 선언
    const history = useHistory();
 
    const onSave = async() => {
    	// reducer 에 선언된 초기값과 동일한 타입으로 data 값 설정
        console.log('file:', file)
        const storageRef = projectStorage.ref(file.name);
        const collectionRef = projectFirestore.collection('images');
        // const {progress, url } = await useStorage(file);
        const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            await collectionRef.add({ url, createdAt });
            setImageUrl(url);

        console.log('url: ',url);
        const _inputData = {
            // id: '',
            title: title,
            content: content,
            user: user,
            url: url,
        }    

        // 리듀서의 dataSave 함수에 dispatch
        dispatch(dataSave(_inputData))
        // input 값 reset
        setTitle('')
        setContent('')
        setUser('')
        setImageUrl('')
        // data dispatch 후 페이지 이동
        history.push('/')
        // 페이지 이동 시 footer 의 button 설정을 위해 dispatch
        dispatch(uriSave('/'))
    }

    const handleCancel = () => {
        history.push('/')
    }
 
	// input 값이 onChange 될 때마다 호출되어 setTitle, setContent 에 값을 넣어 제어한다.
    const handleTitle = (e) => {
        setTitle(e.target.value)
    }
 
    const handleContent = (e) => {
        setContent(e.target.value)
    }

    const handleUser = (e) => {
        setUser(e.target.value)
    }

    
 
    return(
        <div>
            <h2>글 작성</h2>
            <div>
                <div>
                    <input type='text' className='inputTitle' placeholder='제목을 입력하세요' onChange={handleTitle} value={title} />
                </div>
                <div>
                    <textarea className='inputContent' placeholder='내용을 입력하세요' onChange={handleContent} value={content} />
                </div>
                <div>
                <input type='text' className='inputUser' placeholder='사용자' onChange={handleUser} value={user} />
                </div>
                <div>
                {/* <UploadImage/> */}
                <UploadForm file={file} onFile={setFile}  />
                </div>
                <div>
                    <button type='button' onClick={onSave}>등록</button>
                    <button type='button' onClick={handleCancel}>취소</button>
                </div>
            </div>
        </div>
    )
}
 
export default BoardNew;

