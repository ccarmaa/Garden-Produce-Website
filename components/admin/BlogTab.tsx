export default function BlogTab() {
  /**
   * schema: blog_posts
   * columns:
   *  title
   *  excerpt
   *  content
   *  image_url
   *  published (true = lives on site, false = draft)
   *  created_at/updated_at (managed by db, no need to touch these)
   *
   * IMAGES:
   *  Images don't get directly stored in DB. Instead we are using Supabase Storage.
   *  There is a bucket called blog-images. Supabase gives you back a public URL. That
   *  URL is what you store in image_url. To get the URL after uploading:
   *
   *  const { data } = supabase.storage.from('blog-images').getPublicUrl(filename)
   *
   *  data.publicUrl is what you save to the database
   *
   *
   * READING POSTS (on the home page)
   *  const { data } = await supabase
   *    .from('blog_posts')
   *    .select('*')
   *    .eq('published', true)
   *    .order('created_at', { ascending: false })
   *
   *  the query may be changed depending on how many posts we want to show.
   *  this just shows all published posts.
   *
   *
   * CREATING POSTS
   *  await supabase.from('blog_posts').insert({
   *    title: 'Enter Title Here',
   *    excerpt: 'Here is the Excerpt',
   *    content: 'Here is the Content (will be md style i assume)',
   *    image_url: 'https://...supabase.co/storage/v1/object/public/blog-images/photo.jpg',
   *    published: true
   *  })
   *
   *
   * UPDATING A POST
   * await supabase.from('blog_posts').update({ title: 'New Title' }).eq('id', postId)
   *
   *
   * DELETING A POST
   * await supabase.from('blog_posts').delete().eq('id', postId)
   *
   * note that if you delete a post, the image file stays in the Storage bucket
   * unless you explicitly remove it too... i dont think this matters too much but
   * it may be best to add
   *  await supabase.storage.from('blog-images').remove([filename])
   *
   *
   * NOTES:
   * For uploading images, check you handleImageUpload works in the ProductsTab.tsx
   * The blog version is identical, just swap product-images for blog-images.
   *
   */

  return <p>Blog tab.</p>;
}
