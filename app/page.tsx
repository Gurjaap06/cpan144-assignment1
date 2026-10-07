import WelcomeCard from "@/components/WelcomeCard";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>

      <p className="pageDescription">
        Welcome to my Advanced Front-End Development application.
      </p>

      <WelcomeCard
        name="Gurjaap"
        course="CPAN 144"
      />
    </div>
  );
}