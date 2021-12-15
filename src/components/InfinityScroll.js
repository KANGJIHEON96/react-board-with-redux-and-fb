import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';
import { dispatch } from 'react';

function InfinityScroll(props) {
    let [image, setimage] = useState([]);
    let [hitBottom, sethitBottom] = useState(false);
    let [iterator, setiterator] = useState(1);
  
    useEffect(() => {
      sethitBottom(false);
      
      axios.post(`/api/image/request/${iterator}`).then((res) => {
        if (!res.data.imageSucess) {
          return openNotification("이미지를 불러오는데 실패했습니다.");
        }
        iterator++;
        setiterator(iterator);
        image = [...image, ...res.data.image];
        setimage(image);
        
      });
    }, [hitBottom]);
  
    const onScroll = () => {
      if (
        window.scrollY + document.documentElement.clientHeight >
        document.documentElement.scrollHeight - 10
      ) {
        dispatch(loadingScreen);
        sethitBottom(true);
      }
    };
  
    // useEffect에서 addEvent를 한 경우 반드시 clean up을 해줍시다.
    useEffect(() => {
      window.addEventListener("scroll", onScroll);
      return () => {
        window.removeEventListener("scroll", onScroll);
      };
    }, []);
  
    return (
      <>
        <div>
          {image.map((el) => (
            <img src={`${el.imageUrl}`} alt="zzal" key={el._id} />
          ))}
        </div>
      </>
    );
  }
  
  export default withRouter(InfinityScroll);