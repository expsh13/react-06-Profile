import { ChangeEvent } from "react";

type PropsType = {
  title: string;
  inputType: string;
  onChange: (data: string) => void;
};

export const InputField = (props: PropsType) => {
  const { title, inputType, onChange } = props;
  return (
    <div>
      <p className="font-bold">{title}</p>
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
