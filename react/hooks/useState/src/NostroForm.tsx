import { useEffect, useState } from "react";

function NostroForm() {
  const [onlyText, setText] = useState("");

  useEffect(() => {
    if (/[0-9]/.test(onlyText)) {
      setText("");
    }
  }, [onlyText]);

  return (
    <div className="NostroForm">
      <form name="mario">
        <div className="field">
          <label htmlFor="only_text">Solo testo:</label>
          <input
            onChange={(e) => setText(e.target.value)}
            type="text"
            name="only_text"
            id="only_text"
            value={onlyText}
          />
        </div>
        <div className="field">
          <button type="submit">submit</button>
        </div>
      </form>
    </div>
  );
}

export default NostroForm;
