import { createResponses } from "@/features/responses/createResponse"
import { ReactNode } from "react"
import ResponseItem from "./ResponseItem"


export default function Responses( {children}: {children: ReactNode}) {
  const responses = Array.from(createResponses({count: 10, faker}).values()) //henter ut verdier vi faker . values
  const aleternative = {
      id: "1",
      answer: "My answer",
      score: 22,
      category: "Animals",
      questionId: "1234",
  }

    return (
      <div className="relative mx-auto mt-4 max-w-2xl overflow-x-auto">
        <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Answer
              </th>
              <th scope="col" className="px-6 py-3">
                Score
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Question
              </th>
            </tr>
          </thead>
          <tbody>
            {children} 
            {/* {responses.map((response) => (  // .map - moderne måten å gå gjennom array, må benytte en key 
              <ResponseItem key = {response.id} {...response} />
            ))} */}
            {/* <ResponseItem {...aleternative}/> */ }
          </tbody>
        </table>
      </div>
    )
  }