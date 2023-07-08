'use client'
import Blogs from './blog/page'
import Post from './posts/post'
import { useState } from 'react'
import Header from './header/page'
export default function Home() {
  return (
    <div className="flex min-h-screen p-4   grid-cols-1 ">
      <Header />
      <Blogs />
    </div>
  )
}
