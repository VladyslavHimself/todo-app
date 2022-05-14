import classes from './styles.module.scss';

interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    type?: 'primary' | 'secondary' | 'ghost';
}

export const Button = ({
    children,
    type,
    className,
    ...props
}: IButtonProps) => {
    const buttonClasses = [classes.button, className];
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
