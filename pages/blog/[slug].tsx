import { services } from "../../services"

const Blog = ({ slug, welcome }) => {
  return <div>blog#{slug} |{welcome}</div>
}

export default Blog


export async function getServerSideProps({ query = {} }) {
  let { slug = '?' } = query as any
  return {
    props: {
      welcome: await (await services.greeter()).hello(`blog#${slug}`),
      slug
    },
  }
}