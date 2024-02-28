'use client'
import {
    MagnifyingGlassIcon
  } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

import React from "react";


export default function SearchBox({isOpen, setIsOpen}) {
    const router = useRouter(); 
    const [inputValue, setInputValue] = React.useState("");
    const inputRef = React.useRef(null);

    React.useEffect(()=>{
        inputRef.current.focus();
    }, [])

    function handelSearch (e){
        router.push(`/blog/search?q=${inputValue}`);
        setIsOpen(!isOpen)
    }   
    function handleBlur(){
        setIsOpen(!isOpen)
    } 

    return (
        <div className="absolute top-8 right-0 z-50 ">
            <form action="" class="p-10 flex items-center gap-2">
                <input 
                    ref={inputRef}
                    type="text" 
                    value={inputValue}
                    onChange={(e)=>setInputValue(e.target.value)}
                    onBlur={handleBlur}
                    className="border focus:border focus:outline-none rounded-lg px-4 py-2 bg-white/50 " />

                    <button
                    onClick={handelSearch}
                    >
                            <MagnifyingGlassIcon className="h-9 w-9 cursor-pointer shadow-sm hover:shadow-md transition-all ease-linear p-2 rounded-full " />
                    </button>
                </form>
        </div>

    );
}
