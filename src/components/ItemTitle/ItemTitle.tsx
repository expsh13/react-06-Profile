type PropsType = {
  title: string;
};

export const ItemTitle = (props: PropsType) => {
  const { title } = props;
  return <p className="font-bold">{title}</p>;
};
