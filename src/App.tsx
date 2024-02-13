export const App = () => {
  return (
    <div className="w-1/2 m-auto">
      <h1 className="font-bold text-center">プロフィール生成</h1>
      <div className="flex gap-2.5">
        <div className="w-2/5 flex flex-col gap-2">
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <button>ダウンロード</button>
        </div>
        <div className="w-2/5 rounded shadow border-gray-400 border p-2">a</div>
      </div>
    </div>
  );
};
