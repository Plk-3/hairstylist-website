import fs from 'fs'
import matter from 'gray-matter'

export async function getStaticProps() {
  const about = fs.readFileSync('content/about.md', 'utf-8')
  const { data: aboutData, content: aboutContent } = matter(about)
  return {
    props: { aboutData, aboutContent }
  }
}

export default function Home({ aboutData, aboutContent }) {
  return (
    <section>
      <h1>Welcome to {aboutData.name || "the Hair Studio"}</h1>
      <p>{aboutData.intro || "Beautiful hair, beautiful you. Explore our services and gallery!"}</p>
    </section>
  )
}
