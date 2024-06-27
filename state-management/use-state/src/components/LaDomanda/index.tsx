import { useState } from "react";
import { QuestionStatus } from "../../enums";

export function LaDomanda() {
  const [status, setStatus] = useState(QuestionStatus.TYPING);
  const [city, setCity] = useState("");

  const handler = () => {
    setStatus(QuestionStatus.SUBMITTING);
    setTimeout(() => {
      if (city === "Cesena") {
        setStatus(QuestionStatus.SUCCESS);
      } else {
        setStatus(QuestionStatus.TYPING);
      }
    }, 1500);
  };

  const renderForm = () => {
    return (
      <>
        <div className="domanda">In quale città è nato Simone Gentili?</div>
        <input
          name="content"
          id="content"
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={handler}>check</button>
      </>
    );
  };

  const renderRetryButton = () => {
    return <button onClick={() => window.location.reload()}>retry</button>;
  };

  return (
    <>
      <h1>Quiz ({status})</h1>
      {status === QuestionStatus.TYPING && renderForm()}
      {status === QuestionStatus.SUCCESS && renderRetryButton()}
    </>
  );
}
