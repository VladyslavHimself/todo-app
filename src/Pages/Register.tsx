import Button from '../Components/Ui/Button';
import Input from '../Components/Ui/Input';
import ModalForm from '../Layouts/ModalForm';
import classes from '../scss/auth.module.scss';

function Auth() {
    return (
        <div className={classes.auth}>
            <ModalForm className={classes.form}>
                <h2>Register</h2>
                <div className={classes.inputs}>
                    <Input className={classes.input} placeholder="Full Name" />
                    <Input className={classes.input} placeholder="Email" />
                    <Input
                        type="password"
                        className={classes.input}
                        placeholder="Password"
                    />
                </div>

                <div className={classes.buttons}>
                    <Button className={classes.button} type="primary">
                        Register
                    </Button>
                </div>
            </ModalForm>
        </div>
    );
}

export default Auth;
