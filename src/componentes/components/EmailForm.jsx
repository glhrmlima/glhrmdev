import { useRef } from "react";
import "./EmailForm.css";

export default function EmailForm() {
  const subjectRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = () => {
    const subject = subjectRef.current.value;
    const body = messageRef.current.value;
    window.open(
      `mailto:glhrmdev@gmail.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`
    );
  };

  return (
    <div className="email-form">
      <h3>e-mail</h3>
      <input type="text" ref={subjectRef} placeholder="Assunto:" />
      <textarea rows="5" ref={messageRef} placeholder="Mensagem:"></textarea>
      <button onClick={handleSubmit}>Enviar e-mail</button>
    </div>
  );
}
