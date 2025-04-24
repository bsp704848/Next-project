import React from 'react'


export default function About(){
  return (
      <div className='text-4xl font-bold '>
          <h1>This is About page </h1>
          
    </div>
  )
}

export function generateMetadata({ params }) {
  return {
    title: 'about page',
    description:'this is about discription page '
  }
}






