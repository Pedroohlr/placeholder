import "../styles/globals.css";
import { Providers } from "@/lib/chakra/Providers";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body>
        <Providers>
          <Header />
            <main
             style={{minHeight: '80vh'}}
            >
              {children}
            </main>
            <Footer />
        </Providers>
      </body>
    </html>
  );
}