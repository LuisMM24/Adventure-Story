import { Message } from "ai/react";

export type UserType = {
    name: string;
    messages: Message[];
};

export type UserReducerAction = { type: "SET_USER"; userData: UserType } | { type: "RESET_USER" };
