import { useNavigate } from 'react-router-dom';
import Button from '../Components/Ui/Button';
import Input from '../Components/Ui/Input';
import useInput from '../hooks/useInput';
import ModalForm from '../Layouts/ModalForm';
import classes from '../scss/auth.module.scss';

function Auth() {
    const email = useInput('');
    const password = useInput('');

    const router = useNavigate();

    const changeToRegsitration = () => {
        router('/register');
    };

    return (
        <div className={classes.auth}>
            <ModalForm className={classes.form}>
                <h2>Login</h2>
                <div className={classes.inputs}>
                    <Input
                        {...email}
                        className={classes.input}
                        placeholder="Email"
                    />
                    <Input
                        {...password}
                        type="password"
                        className={classes.input}
                        placeholder="Password"
                    />
                </div>

                <div className={classes.buttons}>
                    <Button className={classes.button} type="primary">
                        Log In
                    </Button>
                    <Button
                        onClick={changeToRegsitration}
                        className={classes.button}
                        type="ghost"
                    >
                        Register
                    </Button>
                </div>
            </ModalForm>
        </div>
    );
}

export default Auth;
