// Type TFriends
type TFriends = {
    id: number;
    name: string;
    image: string;
    balance: number;
}[];

// Type TCombinable
type TCombinable = "user" | "friend";

export type {TFriends, TCombinable};