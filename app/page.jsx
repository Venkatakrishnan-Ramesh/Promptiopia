
import Feed from 'components/Feed'
const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
    <h1 className="head_text text-center">
      Discover & share 
      <br className="max-md :hidden"/>
      <span className="orange_gradient">
        AI Powered Prompts 
      </span>
      </h1>
      <p className="desc text-center">
        Promptopia is a community of writers, artists, and creatives who use AI to generate 
        prompts for their next creative project.
      </p>
      <Feed />
    </section>
  )
}

export default Home