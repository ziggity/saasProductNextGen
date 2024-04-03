import Image from "next/image";
import { ThemeToggle } from "./components/Themetoggle";
import { Navbar } from "./Navbar";

export default function Home() {
  return (
   <div>
    <Navbar></Navbar>
    <ThemeToggle />
       </div>
  );
}
