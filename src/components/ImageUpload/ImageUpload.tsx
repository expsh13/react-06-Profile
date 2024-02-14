import { ItemTitle } from "../ItemTitle/ItemTitle";

type PropsType = {
  title: string;
};

export const ImageUpload = (props: PropsType) => {
  const { title } = props;
  return (
    <div>
      <ItemTitle title={title} />
      <input />
    </div>
  );
};
