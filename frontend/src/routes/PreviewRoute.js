import React from 'react'
import { useParams } from 'react-router-dom';

export default function PreviewRoute(props) {
    const { id } = useParams();
    console.log(props)
    console.log(id)
  return (
    <>
    {/* <div>User ID: {id}</div> */}
    <div>
        Hello
    </div>
    </>
  )
}
