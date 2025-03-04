import React from 'react'
import Form from "next/form";
import SearchReset from './SearchReset';
import {Search} from "lucide-react"
const Searches = ({query} : {query?: string}) => {
    
  return (
    <Form action="/" scroll={false} className='search-form'>
        <input  
            name='query'
            defaultValue={query}
            className='search-input no-underline outline-0'
            placeholder='Search Startups'
        />

        <div className='flex gap-2'>
            {query && ( <SearchReset />
            )}

            <button type='submit' className='search-btn text-white'>
                <Search className='size-5'/>
            </button>
        </div>
    </Form>
  )
}

export default Searches