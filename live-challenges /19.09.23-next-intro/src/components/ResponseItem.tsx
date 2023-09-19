type ResponseItemProps = {
    id: string
    answer: string
    score: number
    category: string
    questionId: string
    onDelete?: (id: string) => void // Optional type med "?"
}

export default function ResponseItem (props: ResponseItemProps) {
    const {id, answer, score, category, questionId } = props //deconstructing

    function handleDelete() {
        onDelete?.(id)
    }
    return(
    <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
              <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
                {id}
              </td>
              <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
                {answer}
              </td>
              <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
                {score}
              </td>
              <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
                {category}
              </td>
              <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
                {questionId}
              </td>
                {onDelete ? (
              <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
                    <button onClick={handleDelete}
                    className ="text-red-300">Slett</button>
              </td>
                ) }
            </tr>
    )
}