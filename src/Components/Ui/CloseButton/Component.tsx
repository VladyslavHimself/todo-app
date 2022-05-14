import CloseIcon from '@mui/icons-material/Close';
import classes from './styles.module.scss';

interface ICloseButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}

export const CloseButton = ({ ...props }: ICloseButtonProps) => {
    return (
        <button {...props} className={classes.close}>
            <CloseIcon htmlColor="#fff" />
        </button>
    );
};
