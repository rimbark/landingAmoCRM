import React from 'react'

export const MapingList = ({ list }: { list: string[] }) => {
  return (
    <>
      {list.map((element) => (
        <li key={element}>{element}</li>
      ))}
    </>
  )
}
