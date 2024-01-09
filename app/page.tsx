import Footer from './components/Footer';
import Hero from './components/Hero'
import Newest from './components/Newest'

export const dynamic = "force-dynamic";

export default function Home() {

  return (
    <div className="dark:bg-gray-950 dark:text-white duration-200 pb-6 sm:pb-8 lg:pb-12">
      <Hero />
      <Newest />
    </div>
  )
}
