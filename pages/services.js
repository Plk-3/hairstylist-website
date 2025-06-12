import fs from 'fs'
import matter from 'gray-matter'

export async function getStaticProps() {
  const services = fs.readFileSync('content/services.md', 'utf-8')
  const { content } = matter(services)
  return {
    props: { content }
  }
}

export default function Services({ content }) {
  return (
    <section>
      <h1>Services</h1>
      <div>{content}</div>
    </section>
  )
}
