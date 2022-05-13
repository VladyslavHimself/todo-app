import classes from './styles.module.scss';

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = ({ className, ...props }: IInputProps) => {
    const inputClasses = [classes.input, className];

    return <input {...props} className={inputClasses.join(' ')} />;
};
