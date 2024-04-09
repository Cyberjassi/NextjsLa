"use client"
import React from 'react'
// import { NextRouter } from 'next/router'
import { useRouter } from 'next/navigation'

function page() {
    let rout = useRouter()
  return (
    <div>
      <h1>This is login page</h1>
      <button onClick={()=>rout.push('/')}>Go to Home</button><br />
      <button onClick={()=>rout.push('/about')}>Go to About</button><br /><br />

      {/* <button onClick={()=>rout.push('/login/studentLogin')}>Login For Student</button>
      <br />
      <button onClick={()=>rout.push('/login/teacherLogin')}>Login for Teacher</button><br />
      <button onClick={()=>rout.push('/login/collegeLogin')}>Login for Teacher</button> */}
    </div>
  )
}

export default page
