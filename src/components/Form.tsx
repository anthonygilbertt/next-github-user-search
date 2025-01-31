"use client";
import { useForm } from 'react-hook-form';
import Table from "../components/Table"

export default function Form() {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm({
        defaultValues: {
            username: ''
        }
      });

    // const [count, setCount] = useState(0);

    // TODO: push to router ( this file ) default values (in react hook forms)
        // zod, yup, joi 
    // TODO: how to read params from the url ( in the page.tsx)

    return (
        <div>
            <h1 className="text-white">
            Search for a GitHub User 
            </h1>
            {/* <Table data={data} columns={columns} /> */}

            {/* <p>{count}</p>
            <button onClick={ () => setCount(count + 1)}> Increment</button> */}
            <form onSubmit={handleSubmit((data, e) => {
                console.log(data)
                alert('Form Submitted')
                reset() // update form back to default values
            } )}>
                <input className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600" {...register('username', { required: true })} />
                {errors.username && <p>Github Username is required.</p>}
                <br></br>
                <input className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5" type="submit" />
            </form>
            <br></br>
            <Table />
        </div>
    )
}