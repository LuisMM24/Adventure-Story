import React from "react";
import { useUser } from "@/context/userReducer";
import { useRouter } from "next/router";

type Props = {};

function Jungle(props: Props) {
    const { user, dispatch } = useUser();

    return (
        <div>
            <p>Jungle Story for: {user.name}</p>
        </div>
    );
}

export default Jungle;
