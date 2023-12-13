import React from "react";

type Props = {
    handleSubmit: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function ImageUploadField(props: Props) {
    return (
        <>
            <label htmlFor="file">Take a picture</label>
            <input id="file" type="file" name="file" accept="image/*" onChange={props.handleSubmit} style={{ visibility: "hidden" }} className="invisible" />
        </>
    );
}

export default ImageUploadField;
