import React from 'react';
import CustomButton from '../custom-button/custom-button.componet';
import FormInput from '../form-input/form-input.component';
import './sing-in.style.scss';
import { signInWithGoogle } from '../../firebase/firebase.utils';

class SingIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handlerSubmit = event => {
        event.preventDefault();
        this.setState({ email: '', password: '' });
    }

    handlerChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className='sing-in'>
                <h2>I already have an acount</h2>
                <span>Sing in with your email and password</span>

                <form action="" onSubmit={this.handlerSubmit}>
                    <FormInput type="email" name='email' value={this.state.email} handlerChange={this.handlerChange} required label='Email' />
                    <FormInput type="password" name='password' value={this.state.password} handlerChange={this.handlerChange} required label='Password' />
                    <div className='buttons'>
                        <CustomButton type="submit">Sing In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sing In with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SingIn;