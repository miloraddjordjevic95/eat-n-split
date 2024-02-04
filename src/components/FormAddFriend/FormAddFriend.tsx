import {IFriend} from "../../interfaces";
import {ChangeEvent, FormEvent, useState} from "react";
import {Button} from "../index.ts";

interface IFormAddFriendProps {
    onAddFriend(friend: IFriend): void;
}

function FormAddFriend({ onAddFriend }: IFormAddFriendProps) {
    const [name, setName] = useState<string>("");
    const [image, setImage] = useState<string>("https://i.pravatar.cc/48");

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (!name || !image) return;

        const id = Date.now();
        const newFriend: IFriend = {
            id,
            name,
            image: `${image}?=${id}`,
            balance: 0,
        };

        onAddFriend(newFriend);

        setName("");
        setImage("https://i.pravatar.cc/48");
    }

    return (
        <form className="form-add-friend" onSubmit={handleSubmit}>
            <label>👫 Friend name</label>
            <input
                type="text"
                value={name}
                onChange={(event: ChangeEvent<HTMLInputElement>) => setName(event.target.value)}
            />

            <label>🌄 Image URL</label>
            <input
                type="text"
                value={image}
                onChange={(event: ChangeEvent<HTMLInputElement>) => setImage(event.target.value)}
            />

            <Button>Add</Button>
        </form>
    );
}

export default FormAddFriend;