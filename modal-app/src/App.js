import "./App.css";
import Modal from "././modal/modal";
import React, { useState } from "react";

function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleModalSubmit = (formData) => {
    console.log("Form Data:", formData);
  };

  return (
    <div>
      <button onClick={() => setModalOpen(true)}>Modal</button>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleModalSubmit}
      />
    </div>
  );
}

export default App;
