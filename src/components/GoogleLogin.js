import 'firebase/firestore';
import 'firebase/auth';
import { signInWithGoogle } from '../firebase/utils';
import { auth } from '../firebase/utils';

function GoogleSignin(props) {

    auth.onAuthStateChanged(user => {
        if(user !== null){
            console.log('로그인 됐슴');
        }
    })
    return (
        <div>
            <button onClick={signInWithGoogle}>로그인</button>
        </div>
    )
}

export default GoogleSignin;
