import styles from "./Button.module.css";
import {ReactNode} from "react";

interface IButtonProps {
    onClick?(): void;
    children: ReactNode;
}

function Button({onClick, children}: IButtonProps): JSX.Element {
    return (
        <button className={styles.button} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;