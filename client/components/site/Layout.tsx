import { PropsWithChildren } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
