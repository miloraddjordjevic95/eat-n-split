import {IFriend} from "../../interfaces";
import {ChangeEvent, FormEvent, useState} from "react";
import {TCombinable} from "../../types";
import {Button} from "../index.ts";

interface IFormSplitBillProps {
    selectedFriend: IFriend;
    onSplitBill(value: number): void;
}

function FormSplitBill({ selectedFriend, onSplitBill }: IFormSplitBillProps) {
    const [bill, setBill] = useState<string>("");
    const [paidByUser, setPaidByUser] = useState<string>("");
    const paidByFriend = bill ? bill - paidByUser : "";
    const [whoIsPaying, setWhoIsPaying] = useState<TCombinable>("user");

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (!bill || !paidByUser) return;
        onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
    }

    return (
        <form className="form-split-bill" onSubmit={handleSubmit}>
            <h2>Split a bill with {selectedFriend.name}</h2>

            <label>💰 Bill value</label>
            <input
                type="text"
                value={bill}
                onChange={(event: ChangeEvent<HTMLInputElement>) => setBill(Number(event.target.value))}
            />

            <label>🧍‍♀️ Your expense</label>
            <input
                type="text"
                value={paidByUser}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    setPaidByUser(
                        Number(event.target.value) > bill ? paidByUser : Number(event.target.value)
                    )
                }
            />

            <label>👫 {selectedFriend.name}'s expense</label>
            <input type="text" disabled value={paidByFriend} />

            <label>🤑 Who is paying the bill</label>
            <select
                value={whoIsPaying}
                onChange={(event: ChangeEvent<HTMLSelectElement>) => setWhoIsPaying(event.target.value as TCombinable)}
            >
                <option value="user">You</option>
                <option value="friend">{selectedFriend.name}</option>
            </select>

            <Button>Split bill</Button>
        </form>
    );
}

export default FormSplitBill;