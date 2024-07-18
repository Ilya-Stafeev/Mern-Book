import React, { useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { Button, Checkbox, Label, TextInput, Select, Textarea } from "flowbite-react";

const EditBooks = () => {
  const {id} = useParams();
  const {title, author_name, image_url, category, description, book_url_pdf} = useLoaderData();

  const bookCategories = [
      "Fiction",
      "Non-Fiction",
      "Mistery",
      "Programming",
      "Science Fiction",
      "Fantasy",
      "Horror",
      "Bibliography",
      "Autobiography",
      "History",
      "Self-help",
      "Memoir",
      "Business",
      "Children Books",
      "Travel",
      "Religion",
      "Art and Design"
  ]

  const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);

  const handleChangeSelectedValue = (event) => {
      // console.log(event.target.value);
      setSelectedBookCategory(event.target.value)
  }

  const handleUpdate = (event) => {
      event.preventDefault();
      const form = event.target;

      const bookTitle = form.title.value;
      const authorName = form.author_name.value;
      const imageUrl = form.image_url.value;
      const category = form.categoryName.value;
      const description = form.description.value;
      const bookUrlPdf = form.book_url_pdf.value;
      
      const updateBookObj = {
          bookTitle, authorName, imageUrl, category, description, bookUrlPdf
      }

      // console.log(bookObj)
      // update book data

      fetch(`http://localhost:5000/book/${id}`, 
      {
        method:"PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(updateBookObj)
      }).then(res => res.json()).then(data => {
        alert("Book is updated successfully!!!")
    })
  }

  return (
    <div className='px-4 my-12 w-full'>
        <h2 className='flex text-3xl font-bold'>Update the book data</h2>
        
        <form onSubmit={handleUpdate} className="flex lg:w-full flex-col flex-wrap gap-4 mt-6">
            {/* first row */}
            <div className='flex gap-8'>
                <div className='lg:w-1/2'>
                    <div className="mb-2 block">
                        <Label htmlFor="title" value="Book Title" />
                    </div>
                    <TextInput id="title" name='title' type="text" placeholder="Book name" required  defaultValue={title}/>
                </div>

                {/* authorName */}
                <div className='lg:w-1/2'>
                    <div className="mb-2 block">
                        <Label htmlFor="author_name" value="Author Name" />
                    </div>
                    <TextInput id="author_name" name='author_name' type="text" placeholder="Author Name" required defaultValue={author_name}/>
                </div>
            </div>

            {/* 2nd row */}    
            <div className='flex gap-8'>
                <div className='lg:w-1/2'>
                    <div className="mb-2 block">
                        <Label htmlFor="image_url" value="Book Image URL" />
                    </div>
                    <TextInput id="image_url" name='image_url' type="text" placeholder="Book Image URL" required defaultValue={image_url}/>
                </div>

                {/* Category */}
                <div className='lg:w-1/2'>
                    <div className="mb-2 block">
                        <Label htmlFor="inputState" value="Book Category" />
                    </div>
                    
                    <Select id='inputState' name='categoryName' className='w-full rounded' value={selectedBookCategory} onChange={handleChangeSelectedValue}>
                        {
                            bookCategories.map((option) => <option key={option} value={option}>{option}</option>)
                        }
                    </Select>
                </div>
            </div>
            
            {/* description */}  
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="description" value="Book Description" />
                </div>
                <Textarea id="description" name='description' placeholder="Write your book description..." required className='w-full' rows={6} defaultValue={description}/>
            </div>

            {/* book pdn link */}
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="book_url_pdf" value="Book PDF URl" />
                </div>              
                <TextInput id="book_url_pdf" name='book_url_pdf' type="text" placeholder="book pdf url" required defaultValue={book_url_pdf}/>
            </div>

            <Button type="submit" className='mt-5 bg-cyan-700'>
                Update Book
            </Button>
        </form>
    </div>
  )
}

export default EditBooks