import type {TFriends} from "./types";
import {useState} from "react";
import {IFriend} from "./interfaces";
import styles from "./App.module.css";
import {Button, FormAddFriend, FormSplitBill, FriendsList} from "./components";

const initialFriends: TFriends = [
    {
        id: 118836,
        name: "Clark",
        image: "https://i.pravatar.cc/48?u=118836",
        balance: -7,
    },
    {
        id: 933372,
        name: "Sarah",
        image: "https://i.pravatar.cc/48?u=933372",
        balance: 20,
    },
    {
        id: 499476,
        name: "Anthony",
        image: "https://i.pravatar.cc/48?u=499476",
        balance: 0,
    },
];

function App(): JSX.Element {
    const [friends, setFriends] = useState<TFriends>(initialFriends);
    const [showAddFriend, setShowAddFriend] = useState<boolean>(false);
    const [selectedFriend, setSelectedFriend] = useState<IFriend | null>(null);

    function handleShowAddFriend(): void {
        setShowAddFriend((curr) => !curr);
    }

    function handleAddFriend(friend: IFriend): void {
        setFriends((curr) => [...curr, friend]);
        setShowAddFriend(false);
    }

    function handleSelection(friend: IFriend): void {
        // setSelectedFriend(friend);
        setSelectedFriend((curr) => (curr?.id === friend.id ? null : friend));
        setShowAddFriend(false);
    }

    function handleSplitBill(value: number): void {
        setFriends((curr) =>
            curr.map((el) =>
                el.id === selectedFriend!.id
                    ? { ...el, balance: el.balance + value }
                    : el
            )
        );
        setSelectedFriend(null);
    }
    return (
        <div className={styles.app}>
            <div className="sidebar">
                <FriendsList
                    friends={friends}
                    selectedFriend={selectedFriend}
                    onSelection={handleSelection}
                />

                {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}

                <Button onClick={handleShowAddFriend}>
                    {showAddFriend ? "Close" : "Add friend"}
                </Button>
            </div>

            {selectedFriend && (
                <FormSplitBill
                    selectedFriend={selectedFriend}
                    onSplitBill={handleSplitBill}
                    key={selectedFriend.id}
                />
            )}
        </div>
    );
}

export default App;
