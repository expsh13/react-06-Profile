import { useState } from "react";
import { InputField } from "./components/InputField/InputField";

export const App = () => {
  const [name, setName] = useState("");
  const [birthDay, setBirthDay] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <div className="w-1/2 m-auto">
      <h1 className="font-bold text-center">プロフィール生成</h1>
      <div className="flex gap-2.5">
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
          <button className="bg-green-500 text-gray-50 p-1 rounded font-bold">
            ダウンロード
          </button>
        </div>
        <div className="flex flex-col items-center w-2/5 rounded shadow border-gray-400 border p-2">
          <p>{name}</p>
          <p>{birthDay}</p>
          <p>{phoneNumber}</p>
        </div>
      </div>
    </div>
  );
};
