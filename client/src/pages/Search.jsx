import React from 'react';

export default function Search() {
    return (
        <div className="flex flex-col md:flex-row">
            <div className="p-7 border-b-2 md:border-r-2 md:min-h-screen">
                <form className="flex flex-col gap-8">
                </form>
            </div>
            <div className="">
                <h1 className='text-3xl font-semibold border-b p-3 text-slate-700 mt-5'>Search Results</h1>
            </div>
        </div>
    )
}