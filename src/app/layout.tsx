import { Nunito } from "next/font/google";
import ClientOnly from "@/components/ClientOnly";
import Navbar from "@/components/navbar/Navbar";
import getCurrentUser from "./actions/getCurrentUser";

import "./globals.css";

const font = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "We Know",
  description: "欢迎来到We_Know",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div>{children}</div>
      </body>
    </html>
  );
}
