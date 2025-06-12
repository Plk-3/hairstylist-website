import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'content', 'gallery.md');
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  return {
    props: {
      title: data.title || 'Gallery',
      description: data.description || '',
      images: data.images || [],
      body: content,
    },
  };
}

export default function GalleryPage({ title, description, images, body }) {
  return (
    <div>
      <h1>{title}</h1>
      {description && <p>{description}</p>}
      <div>
        {images.map((img, idx) => (
          <img key={idx} src={img} alt="" style={{ maxWidth: '300px', margin: '10px' }} />
        ))}
      </div>
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </div>
  );
}
