import { BeatLoader } from "react-spinners";

function loading() {
  return (
    <div className="flex items-center justify-center h-screen bg-purple-200">
      <BeatLoader color="#c500d8" size={30} />
    </div>
  );
}

export default loading;
