import HomeLeft from "@/components/home/left"
import HomeRight from "@/components/home/right"




const Home = () => {
  return (
    <section className="flex-1 dark:bg-zinc-800 max-lg:flex-col flex">
 
        <HomeLeft />

        <HomeRight />

    </section>
  )
}

export default Home