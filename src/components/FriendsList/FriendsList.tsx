import {TFriends} from "../../types";
import {IFriend} from "../../interfaces";
import {Friend} from "../index.ts";
import styles from "./FriendsList.module.css";

interface IFriendsListProps {
    friends: TFriends;
    selectedFriend: IFriend | null;
    onSelection(friend: IFriend): void;
}

function FriendsList({ friends, selectedFriend, onSelection}: IFriendsListProps): JSX.Element {
    return (
        <ul className={styles.friendsList}>
            {friends.map((el) => (
                <Friend
                    friend={el}
                    key={el.id}
                    selectedFriend={selectedFriend}
                    onSelection={onSelection}
                />
            ))}
        </ul>
    );
}

export default FriendsList;