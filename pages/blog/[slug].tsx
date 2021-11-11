import { services } from "../../services"

const Blog = ({ slug, blog }) => {
  if (!blog) return <div>blog#${slug} not found!</div>
  return <div>
    <h1>blog#{blog.id} </h1>
    <p>{blog.title}</p>
  </div>
}

export default Blog


export async function getServerSideProps({ query = {} }) {
  let { slug = '1' } = query as any
  return {
    props: {
      blog: await services.blog.getById(slug),
      slug
    },
  }
}