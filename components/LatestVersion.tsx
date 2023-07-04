import axios from "axios";
import { useEffect, useState } from "react";

const LatestVersion = () => {
  const [version, setVersion] = useState<string>("");

  useEffect(() => {
    axios.get<string>("/api/version").then(({ data }) => {
      setVersion(data);
    });
  }, []);

  return (
    <a
      className={`${
        !version && "invisible"
      } flex flex-row justify-center items-center my-2 mb-4 px-2 h-6 rounded-lg text-xs font-mono bg-pink-200 hover:underline`}
      href="https://github.com/usememos/memos/releases"
      target="_blank"
    >
      {version}
    </a>
  );
};

export default LatestVersion;
