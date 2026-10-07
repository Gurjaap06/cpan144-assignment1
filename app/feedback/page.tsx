import FeedbackForm from "@/components/FeedbackForm";

export default function FeedbackPage() {
  return (
    <div>
      <h1>Feedback</h1>

      <p className="pageDescription">
        Submit the form below to test form event handling and validation.
      </p>

      <FeedbackForm title="Feedback Form" />
    </div>
  );
}