import { ChangeEvent, useState } from "react";
import { InputField } from "./components/InputField/InputField";
import { ImageUpload } from "./components/ImageUpload/ImageUpload";
import html2canvas from "html2canvas";

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

  const handleDownload = async () => {
    console.log("koko");
    const card = document.getElementById("profile-card");
    if (card) {
      const canvas = await html2canvas(card);
      const imgData = canvas.toDataURL("image/png");
      // ダウンロード用のリンク要素を作成
      const downloadLink = document.createElement("a");
      downloadLink.href = imgData;
      // ダウンロードするファイル名を設定
      downloadLink.download = "profile-card.png";
      // リンクをクリックしてダウンロードを実行
      document.body.appendChild(downloadLink);
      downloadLink.click();
      // 不要になったリンク要素を削除
      document.body.removeChild(downloadLink);
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
          <button
            className="bg-green-500 text-gray-50 p-1 rounded font-bold hover:opacity-80"
            onClick={handleDownload}
          >
            ダウンロード
          </button>
        </div>
        <div
          id="profile-card"
          className="flex flex-col items-center gap-1 w-2/5 rounded shadow border-gray-400 border p-2"
        >
          {imgUrl && <img src={imgUrl} />}
          <p>{name}</p>
          <p>{birthDay}</p>
          <p>{phoneNumber}</p>
        </div>
      </div>
    </div>
  );
};
