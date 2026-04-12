const fs = require('fs');
const https = require('https');
const path = require('path');

const dir = path.join(__dirname, 'src', 'assets', 'images');

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

const images = [
  // HeroSection.tsx
  { url: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400&h=500&fit=crop', name: 'hero-main.jpg' },
  { url: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=80&h=80&fit=crop', name: 'hero-small.jpg' },
  
  // Contact.tsx
  { url: 'https://images.unsplash.com/photo-1530049478161-0780526964f4?w=1600&h=500&fit=crop', name: 'contact-hero.jpg' },
  { url: 'https://images.unsplash.com/photo-1598880940371-c756e015fea1?w=600&h=700&fit=crop', name: 'contact-side.jpg' },
  
  // Blog.tsx
  { url: 'https://images.unsplash.com/photo-1605449669747-35d71b9436f8?q=80&w=1600&auto=format&fit=crop', name: 'blog-hero.jpg' },
  
  // CategorySection.tsx
  { url: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=200&h=200&fit=crop', name: 'cat-indoor.jpg' },
  { url: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=200&h=200&fit=crop', name: 'cat-succulent.jpg' },
  { url: 'https://images.unsplash.com/photo-1613299835465-6ad2d0d1998e?q=80&w=870&auto=format&fit=crop', name: 'cat-flowering.jpg' },
  { url: 'https://images.unsplash.com/photo-1521334884684-d80222895322?w=200&h=200&fit=crop', name: 'cat-hanging.jpg' },
  { url: 'https://images.unsplash.com/photo-1463936575829-25148e1db1b8?w=200&h=200&fit=crop', name: 'cat-outdoor.jpg' },
];

images.forEach(img => {
  const dest = path.join(dir, img.name);
  const file = fs.createWriteStream(dest);
  https.get(img.url, (response) => {
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log(`Downloaded ${img.name}`);
    });
  }).on('error', (err) => {
    fs.unlink(dest, () => {});
    console.error(`Error downloading ${img.name}: ${err.message}`);
  });
});
