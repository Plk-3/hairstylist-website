import fs from 'fs'
import matter from 'gray-matter'

export async function getStaticProps() {
  const about = fs.readFileSync('content/about.md', 'utf-8')
  const { content } = matter(about)
  return {
    props: { content }
  }
}

export default function About({ content }) {
  return (
    <section>
      <h1>About</h1>
      <div>{content}</div>
    </section>
  )
}
