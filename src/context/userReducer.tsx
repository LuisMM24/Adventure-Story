import React, { createContext, useContext, useReducer, ReactNode, useEffect } from "react";
import { UserReducerAction, UserType } from "@/utils/@types";

const userDataLocalStorageKey = "userData";

const initialState: UserType = {
    name: "Loading...",
    jungleStory: {
        levels: [
            { id: 1, aiMessage: null, answerMessage: null, success: false },
            { id: 2, aiMessage: null, answerMessage: null, success: false },
            { id: 3, aiMessage: null, answerMessage: null, success: false },
            { id: 4, aiMessage: null, answerMessage: null, success: false },
            { id: 5, aiMessage: null, answerMessage: null, success: false },
            { id: 6, aiMessage: null, answerMessage: null, success: false },
        ],
    },
};

const UserContext = createContext<{ user: UserType; dispatch: React.Dispatch<UserReducerAction> } | undefined>(undefined);

type UserProviderProps = {
    children: ReactNode;
};

const userReducer = (state: UserType, action: UserReducerAction): UserType => {
    switch (action.type) {
        case "SET_USER":
            localStorage.setItem(userDataLocalStorageKey, JSON.stringify(action.userData));
            return action.userData;
        default:
            return state;
    }
};

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const [user, dispatch] = useReducer(userReducer, initialState);

    useEffect(() => {
        const storedUser = localStorage.getItem(userDataLocalStorageKey);
        if (storedUser) {
            dispatch({ type: "SET_USER", userData: JSON.parse(storedUser) });
        }
    }, []);

    return <UserContext.Provider value={{ user, dispatch: dispatch }}>{children}</UserContext.Provider>;
};

const useUser = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
};

export { UserProvider, useUser };
