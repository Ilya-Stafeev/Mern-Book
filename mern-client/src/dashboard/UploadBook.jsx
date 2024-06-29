import React from 'react'

import { Button, Checkbox, Label, TextInput } from "flowbite-react";

const UploadBook = () => {
  return (
    <div className='px-4 my-12 w-full'>
        <h2 className='flex text-3xl font-bold'>Upload A book</h2>
        
        <form className="flex lg:w-full flex-col flex-wrap gap-4 mt-6">
            <div className='flex gap-8'>
                <div className='lg:w-1/2'>
                    <div className="mb-2 block">
                        <Label htmlFor="title" value="Book Title" />
                    </div>
                    <TextInput id="title" type="text" placeholder="Book name" required />
                </div>

                {/* authorName */}
                <div className='lg:w-1/2'>
                    <div className="mb-2 block">
                        <Label htmlFor="author_name" value="Author Name" />
                    </div>
                    <TextInput id="author_name" name='author_name' type="text" placeholder="Author Name" required />
                </div>
            </div>
        </form>
    </div>
  )
}

export default UploadBook