"use client";
import Image from "next/image";
import { useForm } from 'react-hook-form';

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(); 

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <h1 className=" px-4 py-2 text-white  sm:px-18 sm:py-3">
        Search for a GitHub User 
      </h1>

        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <input className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600" {...register('username', { required: true })} />
          {errors.username && <p>Github Username is required.</p>}
          <input className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5" type="submit" />
        </form>

        
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
