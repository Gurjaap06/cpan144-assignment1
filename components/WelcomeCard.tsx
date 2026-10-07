"use client";

import { useState } from "react";

type WelcomeCardProps = {
  name: string;
  course: string;
};

export default function WelcomeCard({
  name,
  course,
}: WelcomeCardProps) {
  // State controls whether additional information is displayed
  const [showDetails, setShowDetails] = useState(false);

  // Event handler for the button
  const handleToggle = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="card">
      <h2>Welcome, {name}!</h2>

      <p>Welcome to my {course} Assignment 1 application.</p>

      <button onClick={handleToggle}>
        {showDetails ? "Hide Details" : "Show Details"}
      </button>

      {/* Conditional rendering */}
      {showDetails && (
        <div className="message success">
          <p>
            This application demonstrates React components, props,
            state management, event handling and conditional rendering.
          </p>
        </div>
      )}
    </div>
  );
}