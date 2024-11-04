import Navbar from "../../components/Navbar";
import { openSans } from "../utils/fonts";
import StarsCanvas from "../../components/StarBackground";

function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className={` ${openSans.className} min-h-screen antialiased`}>
      <StarsCanvas />

      <div className="w-full mb-20 ">
        <Navbar />
      </div>

      {children}
    </main>
  );
}

export default Layout;
