import Link from 'next/link'

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/gallery">Gallery</Link></li>
        <li><Link href="/services">Services</Link></li>
        <li><Link href="/blog">Blog</Link></li>
        <li><a href="/admin" target="_blank" rel="noopener noreferrer">Admin</a></li>
      </ul>
      <style jsx>{`
        nav {
          background: #333;
          padding: 1rem;
        }
        ul {
          display: flex;
          gap: 2rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        a {
          color: #fff;
          text-decoration: none;
        }
      `}</style>
    </nav>
  )
}
