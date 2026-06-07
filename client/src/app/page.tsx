import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center min-h-screen bg-[var(--color-sand)] font-sans text-[var(--color-slate)]">
      <main className="flex flex-col items-center justify-center p-8 text-center">
        <h1 className="text-4xl font-bold text-[var(--color-primary)] mb-4">Kosuka Bali Trip</h1>
        <p className="text-lg">Warm Tropical Premium client foundation.</p>
      </main>
    </div>
  );
}
