import React from 'react'

type SectionHeadingProps= {
  children  : React.ReactNode
}

export default function SectionHeading({children } : SectionHeadingProps
    ) {
  return (
   <h1 className='text-3xl font-raleway font-bold mb-8  uppercase '>{children } </h1>
  )
}

