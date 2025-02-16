"use client";

import Table from "../components/Table"
import githubAPI from "../lib/github";
import { useState } from 'react';

const Form = () => {

    // let name = useRef(null);
    const [inputValue, setInputValue] = useState('')
    // const name = "yourmom"

    function submitMeDaddy(event: { preventDefault: () => void; }) {
        event.preventDefault();
        // const getUserInfo = await githubAPI("anthonygilbertt");
        // debugger;
        // console.log("GetUserInfo: " + getUserInfo);
        // let name.current = "anthonygilbert"
        console.log("name:", inputValue);
        debugger;
    }

    return (
        <div>
            <h1 className="text-white">
                Search for a GitHub User
            </h1>
            <form onSubmit={submitMeDaddy}>
                <input className="block
                        w-full
                        rounded-md
                        bg-white
                        px-3.5
                        py-2
                        text-base
                        text-gray-900
                        outline
                        outline-1
                        -outline-offset-1
                        outline-gray-300
                        placeholder:text-gray-400
                        focus:outline
                        focus:outline-2
                        focus:-outline-offset-2
                        focus:outline-indigo-600"
                        // onChange={(e) => setName(e.target.value)}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Enter username..."
                        required />
                {inputValue && <p>Github Username is required.</p>}
                <br></br>
                <input className="rounded-full
                       border
                       border-solid
                       border-transparent
                       transition-colors
                       flex
                       items-center
                       justify-center
                       bg-foreground
                       text-background
                       gap-2
                       hover:bg-[#383838]
                       dark:hover:bg-[#ccc]
                       text-sm
                       sm:text-base
                       h-10
                       sm:h-12
                       px-4
                       sm:px-5"
                    type="submit" />
            </form>
            <br></br>
            <Table />
        </div>
    )
}

export default Form