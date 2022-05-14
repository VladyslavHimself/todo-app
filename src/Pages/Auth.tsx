import Button from '../Components/Ui/Button';
import Input from '../Components/Ui/Input';
import ModalForm from '../Layouts/ModalForm';
import classes from '../scss/auth.module.scss';

function Auth() {
    return (
        <div className={classes.auth}>
            <ModalForm className={classes.form}>
                <h2>Login</h2>
                <div className={classes.inputs}>
                    <Input className={classes.input} placeholder="Email" />
                    <Input className={classes.input} placeholder="Password" />
                </div>

                <div className={classes.buttons}>
                    <Button className={classes.button} type="primary">
                        Log In
                    </Button>
                    <Button className={classes.button} type="ghost">
                        Register
                    </Button>
                </div>
            </ModalForm>
        </div>
    );
}

export default Auth;
