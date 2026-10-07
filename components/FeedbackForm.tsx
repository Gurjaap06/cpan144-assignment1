"use client";

import { FormEvent, useState } from "react";

type FeedbackFormProps = {
  title: string;
};

export default function FeedbackForm({
  title,
}: FeedbackFormProps) {
  // State for the form input
  const [name, setName] = useState("");

  // State for submission status
  const [status, setStatus] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    // Prevent the page from refreshing
    event.preventDefault();

    // Validate the input
    if (name.trim() === "") {
      setStatus("error");
    } else {
      setStatus("success");
    }
  };

  return (
    <div className="card">
      <h2>{title}</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Enter your name:</label>

        <input
          id="name"
          type="text"
          value={name}
          placeholder="Your name"
          onChange={(event) => setName(event.target.value)}
        />

        <button type="submit">
          Submit
        </button>
      </form>

      {/* Conditional rendering */}
      {status === "error" && (
        <p className="message error">
          Please enter your name before submitting.
        </p>
      )}

      {status === "success" && (
        <p className="message success">
          Thank you, {name}! Your form was submitted successfully.
        </p>
      )}
    </div>
  );
}