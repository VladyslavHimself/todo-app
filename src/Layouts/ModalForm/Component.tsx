import classes from './styles.module.scss';

interface IModalFormProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export const ModalForm = ({ children, className }: IModalFormProps) => {
    const cls = [classes['modal-form'], className];

    return <div className={cls.join(' ')}>{children}</div>;
};
