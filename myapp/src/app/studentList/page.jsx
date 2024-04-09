import React from 'react'
import Link from 'next/link'

function page() {
    let arr=['A','b','c','d','e','f','g']
  return (
    <div>
        <h2>Student List</h2>
      {/* <ul>
        <li> <Link href="studentList/anil">Anil</Link></li>
        <li> <Link href="studentList/ajay">Ajay</Link></li>
        <li> <Link href="studentList/ankit">Ankit</Link></li>
        
      </ul> */}
        <ul>
{      
      arr.map((name)=>{
        <li> <Link href={`studentList/${name}`}>{name}</Link></li>
      })
}
   </ul>
       
        
     
    </div>
  )
}

export default page
