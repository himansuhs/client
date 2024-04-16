import { useRef, useState, useEffect } from "react";
import "./App.css";
import { uploadFile } from "./services/api";
// using useEffect we can make api call
function App() {
  const [file, setfile] = useState("");
  const [result, setresult] = useState("");
  const fileInput = useRef();

  const Logo =
    "https://i.pinimg.com/564x/51/0a/db/510adbd858c03a6260a4d64415bd40ed.jpg";
  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);
        const response = await uploadFile(data);
        setresult(response.path);
      }
    };
    getImage();
  }, [file]);

  const onUploadClick = () => {
    fileInput.current.click();
  };
  console.log(file);
  return (
    <div className="container">
      <img src={Logo} alt="banner" />
      <div className="wrapper">
        <h1>Simple file sharing</h1>
        <p>upload and share the download link</p>
        <button onClick={() => onUploadClick()}>upload</button>
        <input
          type="file"
          ref={fileInput}
          style={{ display: "none" }}
          onChange={(e) => setfile(e.target.files[0])}
        />
        <a href={result} target="_blank">
          {result}
        </a>
      </div>
    </div>
  );
}

export default App;
