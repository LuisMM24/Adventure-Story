import { Message } from "ai/react";

export type UserType = {
    name: string;
    jungleStory: {
        levels: { id: number; aiMessage: Message | null; answerMessage: Message | null; success: boolean }[];
    };
};

export type UserReducerAction = { type: "SET_USER"; userData: UserType } | { type: "RESET_USER" };
