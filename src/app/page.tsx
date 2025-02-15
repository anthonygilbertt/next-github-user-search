import Image from "next/image";
import Form from "../components/Form"

// export default async function App() {
export default async function App() {
  // TODO: Make this an empty default value
  // const getUserInfo = await githubAPI("anthonygilbertt");
  // console.log(getUserInfo);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Form/>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
        Made with
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={62}
          height={62}
          priority
        />        
         by Anthony Gilbert
        </a>
      </footer>
    </div>
  );
}
