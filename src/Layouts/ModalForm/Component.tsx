import CloseButton from '../../Components/Ui/CloseButton';
import classes from './styles.module.scss';

interface IModalFormProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    withCloseButton?: boolean;
    onCloseButtonClickHandler?: () => void;
}

export const ModalForm = ({
    children,
    className,
    withCloseButton,
    onCloseButtonClickHandler,
}: IModalFormProps) => {
    const cls = [classes['modal-form'], className];

    return (
        <div className={cls.join(' ')}>
            {withCloseButton && (
                <div className={classes['close-btn']}>
                    <CloseButton onClick={onCloseButtonClickHandler} />
                </div>
            )}
            {children}
        </div>
    );
};

ModalForm.defaultProps = {
    withCloseButton: false,
};
