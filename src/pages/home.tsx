import HomeLeft from "@/components/home/left"
import HomeRight from "@/components/home/right"




const Home = () => {
  return (
    <section className="flex-1 max-md:flex-col flex">
 
        <HomeLeft />

        <HomeRight />

    </section>
  )
}

export default Home