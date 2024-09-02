import HomeNavbar from "./components/navbar";

export default function LandingLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <HomeNavbar />
      <main>{children}</main>
    </>
  );
}
