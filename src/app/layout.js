import "./globals.css";


export const metadata = {
  title: "The Money Craft",
  description: "Comprehensive financial solutions for capital and wealth management, empowering businesses to thrive in a competitive market.",
  keywords: "Finance consultancy, capital management, wealth solutions, business growth, corporate finance, retail loans, promoter finance, project finance, equity finance",
};
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <head>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{metadata.title}</title>
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
