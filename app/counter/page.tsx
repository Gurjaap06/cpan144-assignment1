import CounterCard from "@/components/CounterCard";

export default function CounterPage() {
  return (
    <div>
      <h1>Counter</h1>

      <p className="pageDescription">
        This page demonstrates React state management and button events.
      </p>

      <CounterCard
        title="Interactive Counter"
        startingValue={0}
      />
    </div>
  );
}