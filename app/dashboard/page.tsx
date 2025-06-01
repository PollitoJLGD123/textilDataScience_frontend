
export default function DashboardPage({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col gap-4 p-4 md:p-8">
      {children}
    </main>
  );
}
