import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';
import { motion } from 'framer-motion';

const ProgressBar = ({ file, setFile,  }) => {
  const { progress, url } = useStorage(file); // 이걸 쓰지 않으니까 BoardNew에서 선언된 progress를 props로 받아와야 한다

  useEffect(() => {
    if (url) {

      console.log('url: ', url)
      // setFile(null);
      alert("이미지 업로드 성공")
    }
  }, [url, setFile]);

  
  return (
    <motion.div className="progress-bar"
      initial={{ width: 0 }}
      animate={{ width: progress + '%' }}
    ></motion.div>
  );
} 

export default ProgressBar;