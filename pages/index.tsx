import Link from 'next/link'
import { services } from "../services"

type InitialProps = {
  welcome: string,
  blogs: { id: number, title: string }[]
}

const Index = ({ welcome = '', blogs = [] }: InitialProps) => {
  return <div>
    <h1>Home!</h1>
    <p>{welcome}</p>
    {blogs.map(x => <p key={x.id}>
      <Link href={`/blog/${x.id}`}>{`blog#${x.title}`}</Link>
    </p>)}
  </div>
}

export default Index

export async function getServerSideProps() {
  return {
    props: {
      welcome: await services.greeter.hello('world'),
      blogs: await services.blog.list()
    },
  }
}