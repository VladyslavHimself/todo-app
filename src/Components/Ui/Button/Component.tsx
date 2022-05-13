import classes from './styles.module.scss';

interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    type?: 'primary' | 'secondary' | 'ghost';
}

export const Button = ({ children, type, ...props }: IButtonProps) => {
    const buttonClasses = [classes.button];
    type && buttonClasses.push(classes[type]);

    return (
        <button {...props} className={buttonClasses.join(' ')}>
            {children}
        </button>
    );
};

Button.defaultProps = {
    type: 'success',
};
