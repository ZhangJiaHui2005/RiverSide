import NavBar from "@/components/layout/Navbar";
import Footer from "@/components/Footer";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col min-h-screen bg-secondary">
      <NavBar />
      <section className="flex-grow">{children}</section>
      <Footer />
    </main>
  );
}
