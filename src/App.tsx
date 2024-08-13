import { useRef, useState } from "react";
import "./App.css";
import axios from "axios";
function App() {
  const [response, setResponse] = useState();
  const ref = useRef<HTMLTextAreaElement>(null);
  const fetchData = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (!ref.current) return;
      const res = await axios.post(
        "http://localhost:8000/switches/execCommand",
        {
          data: ref.current.value,
        }
      );
      console.log(res);

      setResponse(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        width: "600px",
      }}
    >
      <form
        style={{
          display: "flex",
          gap: "10px",
        }}
        onSubmit={fetchData}
      >
        <textarea
          ref={ref}
          style={{
            padding: "10px",
            width: "100%",
          }}
        />
        <button
          style={{
            color: "white",
            padding: "10px",
            background: "green",
          }}
        >
          submit
        </button>
      </form>

      {response && (
        <div
          style={{
            marginTop: "20px",
            border: "1px solid white",
          }}
        >
          {JSON.stringify(response)}
        </div>
      )}
    </div>
  );
}

export default App;
