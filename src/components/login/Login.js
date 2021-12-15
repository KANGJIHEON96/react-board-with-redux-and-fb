// import React, { useState } from "react";
// import { Link, useHistory } from "react-router-dom";
// import { signIn, signInWithGoogle } from '../../helpers/auth';
// import './login.css'



// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const history = useHistory();

//   const handleOnChange = (e) => {
//     const type = e.target.name;
//     if (type === "email") {
//       setEmail(e.target.value);
//     } else if (type === "password") {
//       setPassword(e.target.value);
//     }
//   };

//   const handleOnSubmit = async (e) => {
//     e.preventDefault();
//     if (email !== "" && password !== "") {
//       try {
//         const loginUser = await signIn(email, password);
//         if(loginUser){
//             alert('로그인 되었습니다')
//             // 여기서 이동
//             history.push('/board')
            
    
//       } }catch (error) {
//         alert('로그인 실패 ')
//         console.log(error);
//       }
//     }
//   };

//   const handleGoogleSignIn = async () => {
//     try {
//       await signInWithGoogle();
//       alert('로그인 되었습니다!')
//       history.push('/board')
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="login">
//       <div className="loginWrapper">
//         <h1 className="loginLogo">로그인</h1>
//         <form className="loginBox" onSubmit={handleOnSubmit}>
//           <div>
//             <input
//               type="email"
//               placeholder="이메일을 입력하세요."
//               name="email"
//               value={email}
//               onChange={handleOnChange}
//             />
//           </div>
//           <div>
//             <input
//               type="password"
//               placeholder="비밀번호를 입력하세요."
//               name="password"
//               value={password}
//               onChange={handleOnChange}
//             />
//           </div>
//           <div>
//             <button type="submit"  >로그인</button>
//             <button type="button" onClick={handleGoogleSignIn}>구글 로그인</button>
//           </div>
//         </form>
//         <hr></hr>
//         <p>
//           회원이 아니신가? <Link to="/register">회원가입</Link>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Login;