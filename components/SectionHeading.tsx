import React from 'react'

type SectionHeadingProps= {
    childern : React.ReactNode
}

export default function SectionHeading({childern} : SectionHeadingProps
    ) {
  return (
   <h1 className='text-3xl font-raleway font-bold mb-8  uppercase '>{childern} </h1>
  )
}
