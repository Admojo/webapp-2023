"use client" 

import { useState } from "react"

import ResponseItem from "@/components/ResponseItem"
import Responses from "@/components/Responses"
import { createResponses, faker } from "@/features/responses/createResponse"


//Funksjonen endrer verdier, useState holder styring på tilstanden til "events" eks. 
export default function ResponsePage() {
  const [responses, setResponeses] = useState(
    Array.from(createResponses({ count: 10, faker }).values())
  )
  const deleteResponseItemHandler = (id: string) => {
    // console.log(id)
    setResponeses((prev) => prev.filter((response) => response.id !== id))
  }

  if(!responses.length) {
    return (
        <div className="mx-auto w-full max-w-3xl">
            <p>Ingen responser</p>
        </div>
    )
  }
  return (
    <Responses>
      {responses.map((response) => (
        <ResponseItem 
        key={response.id} {...response} />
      ))}
    </Responses>
  )
}