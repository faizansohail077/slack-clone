import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import { auth, provider } from './Firebase'
import { useStateValue } from './Context/StateProvider'
import { actionType } from './Context/Reducer'


function Login() {
    const [state, dispatch] = useStateValue()

    const signIn = (e) => {
        auth
            .signInWithPopup(provider)
            .then(result => {
                console.log(result)
                dispatch({
                    type: actionType.SET_USER,
                    user: result.user
                })
            })

            .catch(error => { alert(error) })
    }

    return (
        <div className='login'>
            <div className="login__container">
                <img src="https://i.pcmag.com/imagery/reviews/07td46ju7p6lLVb0QGwc5VF-6..v_1569479844.jpg" alt="" />


                <h1>Sign in to saylani</h1>
                <p>faizan' slack clone</p>
                <Button onClick={signIn} >Sign in with google</Button>
            </div>
        </div>
    )
}

export default Login
