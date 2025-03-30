import Image from "next/image";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <Image
        src="/broken-page.gif" // Place your GIF in the public folder
        alt="Broken Page"
        width={400}
        height={300}
        className="mb-6"
      />
      <h1 className="text-4xl font-bold text-red-600">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600 mt-4">
        Oops! The page you are looking for does not exist.
      </p>
      <Link href="/">
  Go back to Home
</Link>
    </div>
  );
}
