import { useState } from "react";
import "../styles/componentsUnity.css"; // Importando o CSS externo

export default function CommentBox() {
  const [comment, setComment] = useState("");

  return (
    <div className="comment-box">
      
      <input
        className="comment-input"
        type="text"
        placeholder="Hoje a aula foi..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      
      {comment.length > 3 && (
        <button className="comment-button" type="submit">
          Enviar
        </button>
      )}
    </div>
  );
}
