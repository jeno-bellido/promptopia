import Feed from "@components/Feed"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Discover & Share
            <br className="max-md:hidden" />
            <span className="orange_gradient text-center"> Useful Contents </span>
        </h1>
        <p className="desc text-center">
        ContentSite is a dedicated platform that facilitates the exchange and exploration of content pertaining to a wide array of topics. It serves as a repository for both general knowledge and specialized advice, fostering a dynamic community of learning and discovery.        </p>
        <Feed />
    </section>
  )
}

export default Home