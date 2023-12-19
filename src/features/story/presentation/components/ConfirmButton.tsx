import React from "react";
import CheckSVG from "@/assets/images/check.svg";
import { RoundedButton } from "@/shared/components/molecules/RoundedButton";

type Props = {
  onClick: () => void;
};

export const ConfirmButton = (props: Props) => {
  return (
    <RoundedButton onClick={props.onClick}>
      <CheckSVG />
    </RoundedButton>
  );
};
