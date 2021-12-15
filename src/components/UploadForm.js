import React, { Fragment, useState } from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = ({file, onFile}) => {
  // BoardNew로 이동
  // const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [selectedFiles, setSelectedFiles] = useState([])

  const types = ['image/png', 'image/jpeg'];

  const handleChange = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      onFile(selected);
      setError('');
    } else {
      onFile(null);
      setError('이미지 파일을 선택하세요. (png/jpg)');
    }
  };

  // const handleImageChange = (e) => {
  //   if (e.target.files) {
  //     const filesArray = Array.from(e.target.files).map((file) =>
  //     URL.createObjectURL(file)
  //     );
  //     // console.log("filesArray :" , e.target.files);
  //     onFile(e.target.files)

  //     setSelectedFiles((prevImages) => prevImages.concat(filesArray));
  //     Array.from(e.target.files).map(
  //       (file) => URL.revokeObjectURL(file)
  //     )
  //   }
  // }

  // const renderPhotos = (source) => {
  //   console.log("source: ", source);
  //   return source.map((photo) => {
  //     return <img src={photo} alt="" key={photo} />
  //   })
  // }


  // return (
  //   <div className="form">
  //     <div className="heading">이미지 선택하쇼</div>
  //     <div>
  //       <input type="file" id="file" multiple onChange={handleImageChange} />
  //       <div className="label-holder">
  //         {/* <label htmlFor="file" className="label">
  //         </label> */}
  //       </div>
  //       <div className="result">{renderPhotos(selectedFiles)}</div>
  //     </div>
  //   </div>
  // )

   return ( <>
    <form>
     <label>
       <input type="file" multiple onChange={handleChange} />
       <span>+</span>
     </label>
     <div className="output">
       { error && <div className="error">{ error }</div>}
       { file && <div>{ file.name }</div> }
       {/* 임시 주석 */}
       { file && <ProgressBar file={file} setFile={onFile} /> }  
     </div>
   </form>
   </>
  );
}

export default UploadForm;