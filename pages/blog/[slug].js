import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export async function getStaticPaths() {
  const files = fs.readdirSync('content/blog')
  const paths = files.map(filename => ({
    params: { slug: filename.replace('.md', '') }
  }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const markdownWithMeta = fs.readFileSync(path.join('content/blog', params.slug + '.md'), 'utf-8')
 const { data, content } = matter(markdownWithMeta)
// Ensure date is a string
const safeData = { ...data, date: data.date ? String(data.date) : null }
return { props: { data: safeData, content } }
}

export default function BlogPost({ data, content }) {
  return (
    <article>
      <h1>{data.title}</h1>
      <small>{data.date}</small>
      <div>{content}</div>
    </article>
  )
}
