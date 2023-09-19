

import Image from 'next/image'
import Title from '@/components/Title'

export default function Home() {
  return (
    <main> 
        <Title title="First title" className="bg-red-200"/>
        <Title title="Second title" className="bg-blue-200"/>

    </main>
  )
}
