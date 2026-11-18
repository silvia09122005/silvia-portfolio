import "./globals.css";

export const metadata = {
  title: "Silvia Anggreny Kahali — Web Developer & UI/UX Enthusiast",
  description:
    "The portfolio of Silvia Anggreny Kahali, an Information Systems student passionate about web development and UI/UX design.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
