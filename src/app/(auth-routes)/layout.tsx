import Logo from "@/components/common/logo";
import Image from "next/image";
import Link from "next/link";

export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <main className="h-screen w-screen bg-gray-100 flex flex-col items-center justify-center">
        <Link href={"/"} className="outline-none no-underline">
          <Image
            src="/media/logo.svg"
            alt="devlink logo"
            height={32}
            width={146}
            className="md:block hidden"
          />
        </Link>
        <div className="max-w-md rounded-xl mx-auto px-6 py-8 w-full">
          {children}
        </div>
      </main>
    </>
  );
}
