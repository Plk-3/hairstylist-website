export default function Footer() {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Your Wife's Name. All rights reserved.</p>
      <style jsx>{`
        footer {
          background: #222;
          color: #fff;
          padding: 1rem;
          text-align: center;
        }
      `}</style>
    </footer>
  )
}
