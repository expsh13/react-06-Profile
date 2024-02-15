import { ChangeEvent } from "react";
import { ItemTitle } from "../ItemTitle/ItemTitle";

type PropsType = {
  title: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const ImageUpload = (props: PropsType) => {
  const { title, onChange } = props;

  return (
    <div>
      <ItemTitle title={title} />
      <input type="file" accept="image/*" onChange={onChange} />
    </div>
  );
};
