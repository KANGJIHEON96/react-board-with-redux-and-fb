import React, {useState} from 'react';
import { useHistory } from 'react-router';
import {signUp} from '../../helpers/auth';


const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory()

  const handleOnChange = (e) => {
      const type = e.target.name;
      if (type === "email") {
        setEmail(e.target.value);
      } else if (type === "password") {
        setPassword(e.target.value);
      }
    };

    const handleOnSubmit = async (e) => {
      e.preventDefault();
      if (email !== "" && password !== "") {
        try {
         const info = await signUp(email, password);
         if(info) {
           alert('가입완료!')
          history.push('/login')
           
         }
        } catch (error) {
          console.log(error);
      
          

        }
      }
    };

  return (
    <div className="login">
    <div className="loginWrapper">
    <div className="loginLeft">
  <h3 className="loginLogo">지헌'S 게시판</h3>
  <span className="loginDesc">
    게시판을 사용해보세용
  </span>
</div>
    <div className="loginRight">
        <h1>회원가입</h1>
  <form className="loginBox" onSubmit={ handleOnSubmit} >
   
    <input
      placeholder="이메일"
      name="email"
      value={email}
      className="loginInput"
      type="email"
      onChange={handleOnChange}
    />
    <input
      placeholder="패스워드"
      value={password}
      onChange={handleOnChange}
      className="loginInput"
      type="password"
      minLength="4"
      name="password"
    />
    
    <button className="loginButton" type="submit"  >
      회원가입
    </button>
    
    </form>
    
    </div>
    </div>
    </div>
  );
}

export default Register;