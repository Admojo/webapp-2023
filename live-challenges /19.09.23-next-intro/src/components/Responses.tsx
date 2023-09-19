export default function Responses() {
    return (
      <div className="relative mx-auto mt-4 max-w-2xl overflow-x-auto">
        <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Answere
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
            <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
              <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
                answer-id
              </td>
              <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
                Her er svaret
              </td>
              <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
                22
              </td>
              <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
                kategori-1
              </td>
              <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
                1234
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }