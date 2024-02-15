import { ChangeEvent, useState } from "react";
import { InputField } from "./components/InputField/InputField";
import { ImageUpload } from "./components/ImageUpload/ImageUpload";

export const App = () => {
  const [name, setName] = useState("");
  const [birthDay, setBirthDay] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [imgUrl, setImgUrl] = useState<string | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files && e.currentTarget.files[0]) {
      setImgUrl(URL.createObjectURL(e.currentTarget.files[0]));
    }
  };

  return (
    <div className="grid w-1/2 m-auto gap-2.5">
      <h1 className="font-bold text-center">プロフィール生成</h1>
      <div className="flex justify-center gap-2.5 w-full m-auto">
        <div className="w-2/5 flex flex-col gap-2">
          <InputField
            title="名前"
            inputType="text"
            onChange={(name: string) => setName(name)}
          />
          <InputField
            title="誕生日"
            inputType="date"
            onChange={(date: string) => setBirthDay(date)}
          />
          <InputField
            title="電話番号"
            inputType="text"
            onChange={(number: string) => setPhoneNumber(number)}
          />
          <ImageUpload title="プロフィール写真" onChange={handleFileChange} />
          <button className="bg-green-500 text-gray-50 p-1 rounded font-bold hover:opacity-80">
            ダウンロード
          </button>
        </div>
        <div className="flex flex-col items-center gap-1 w-2/5 rounded shadow border-gray-400 border p-2">
          {imgUrl && <img src={imgUrl} />}
          <p>{name}</p>
          <p>{birthDay}</p>
          <p>{phoneNumber}</p>
        </div>
      </div>
    </div>
  );
};
