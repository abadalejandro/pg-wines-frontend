import React, {useContext} from 'react';
import styles from './LoginScreen.module.css';
import  AuthContext  from '../../auth/AuthContext';
import { types } from '../../types/types';

const LoginScreen = ({ history }) => {
    const { dispatch } = useContext(AuthContext);
    // console.log(JSON.stringify(history));

    const handleLogin = () => {
        dispatch({
            type: types.login,
            payload: { name: 'Juan' }
        });
        history.replace('/');
        
        // history.push('/');
    }

    return (
        <div className={`card ${styles.container} ${styles.mt_1}`}>
            <h1>Login Screen</h1>
            <hr />
            <button className={styles.btn} onClick={handleLogin}>Login</button>

        </div>
    );
}

export default LoginScreen;


