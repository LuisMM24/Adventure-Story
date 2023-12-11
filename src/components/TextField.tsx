import React, { ChangeEventHandler } from "react";

type Props = {
    name: string;
    placeholder: string;

    value: string;
    handleInputChange: ChangeEventHandler<HTMLInputElement>;
};

function TextField(props: Props) {
    return <input name={props.name} placeholder={props.placeholder} value={props.value} onChange={props.handleInputChange} />;
}

export default TextField;
