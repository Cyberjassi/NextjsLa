"use client"
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

function page() {
    const router = useRouter()
  return (
    <div>
      <h1>This is About Page</h1>
    <button onClick={()=>router.push('/')}>Go to Home</button><br />
    <button onClick={()=>router.push('login')}> got Login Page</button><br /><br />
    <Link href='about/aboutStudent'>Go to About Student</Link><br />

    <button onClick={()=>router.push('about/aboutTeacher')}>This is About Teacher</button>

    
    </div>
  )
}

export default page
