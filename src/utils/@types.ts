import { Message } from "ai/react";

export type UserType = {
    name: string;
    jungleStory: {
        levels: { id: number; message: Message | null; answer: string | null; success: boolean }[];
    };
};

export type UserReducerAction = { type: "SET_USER"; userData: UserType } | { type: "RESET_USER" };
