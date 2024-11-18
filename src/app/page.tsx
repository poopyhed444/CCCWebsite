import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-6">Welcome to the Lesson Plans and News Articles Upload Site</h1>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/nextjs-logo.svg"
            alt="Next.js Logo"
            width={72}
            height={16}
          />
          Examples
        </a>
        <Link href="/upload" legacyBehavior>
          <a className="text-blue-500 hover:underline">
            Upload Lesson Plans and News Articles
          </a>
        </Link>
      </div>
    </div>
  );
}