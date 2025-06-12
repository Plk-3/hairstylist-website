import fs from 'fs'
import matter from 'gray-matter'
import Link from 'next/link'

export async function getStaticProps() {
  const files = fs.readdirSync('content/blog')
  const posts = files.map(filename => {
    const markdown = fs.readFileSync(`content/blog/${filename}`, 'utf-8')
    const { data } = matter(markdown)
    return {
      slug: filename.replace('.md', ''),
      title: data.title || filename
    }
  })
  return { props: { posts } }
}

export default function Blog({ posts }) {
  return (
    <section>
      <h1>Blog</h1>
      <ul>
        {posts.map(post => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
