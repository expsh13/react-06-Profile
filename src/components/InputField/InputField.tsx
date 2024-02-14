import { ChangeEvent } from "react";
import { ItemTitle } from "../ItemTitle/ItemTitle";

type PropsType = {
  title: string;
  inputType: string;
  onChange: (data: string) => void;
};

export const InputField = (props: PropsType) => {
  const { title, inputType, onChange } = props;
  return (
    <div>
      <ItemTitle title={title} />
      <input
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          onChange(e.currentTarget.value)
        }
        type={inputType}
        className="rounded shadow border-gray-400 border p-2 w-full block box-border"
      />
    </div>
  );
};
