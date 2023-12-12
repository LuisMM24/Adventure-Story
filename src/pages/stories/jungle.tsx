import React from "react";
import { useUser } from "@/context/userReducer";
import Link from "next/link";

type Props = {};

const levels = [1, 2, 3, 4, 5, 6, 7, 8];

function Jungle(props: Props) {
    const { user, dispatch } = useUser();

    return (
        <div>
            <p>Jungle Story for: {user.name}</p>

            {levels.map((level, index) => {
                return (
                    <div key={index}>
                        <Link href={`/stories/jungle/${level}`}>Level {level}</Link>
                    </div>
                );
            })}
        </div>
    );
}

export default Jungle;
