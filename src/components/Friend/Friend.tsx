import {IFriend} from "../../interfaces";
import {Button} from "../index.ts";
import styles from "./Friend.module.css";

interface IFriendProps {
    friend: IFriend;
    selectedFriend: IFriend | null;
    onSelection(friend: IFriend): void;
}

function Friend({ friend, selectedFriend, onSelection }: IFriendProps) {
    const isSelected = selectedFriend?.id === friend.id;

    return (
        <li className={`${styles.friendLi} ${isSelected ? "selected" : ""}`}>
            <img src={friend.image} alt={friend.name} />
            <h3>{friend.name}</h3>

            {friend.balance < 0 && (
                <p className="red">
                    You owe {friend.name} {Math.abs(friend.balance)}€
                </p>
            )}
            {friend.balance > 0 && (
                <p className="green">
                    {friend.name} owes you {Math.abs(friend.balance)}€
                </p>
            )}
            {friend.balance === 0 && <p>You and {friend.name} are even</p>}

            <Button onClick={() => onSelection(friend)}>
                {isSelected ? "Close" : "Select"}
            </Button>
        </li>
    );
}

export default Friend;