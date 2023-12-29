import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    const formData = new FormData();
    console.log(data);
    formData.append("file", data.file[0]);
    await fetch("http://localhost:3000/upload", {
      method: "POST",
      body: formData,
    });
  };

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
          <input type="file" {...register("file")} />
          <input type="submit" value="invia" />
        </form>
      </div>
    </>
  );
}

export default App;
