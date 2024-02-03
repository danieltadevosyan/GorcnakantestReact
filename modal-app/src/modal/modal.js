import React, { useState } from "react";
import "./modal.css";

const Modal = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const newErrors = {};
  if (!formData.name.trim()) {
    newErrors.name = "Name is required";
  }
  if (!formData.email.trim()) {
    newErrors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    newErrors.email = "Invalid email format";
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      onSubmit(formData);

      onClose();
    }
  };

  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <span className="error">{errors.name}</span>
          </label>
          <label>
            Email:
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <span className="error">{errors.email}</span>
          </label>
          {}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
