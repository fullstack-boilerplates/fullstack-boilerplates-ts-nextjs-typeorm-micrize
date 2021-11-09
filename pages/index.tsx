import Link from 'next/link'
import { services } from "../services"

type InitialProps = {
  welcome: string
}

const Index = ({ welcome = '' }: InitialProps) => {
  return <div>
    <h1>Home!</h1>
    <p>{welcome}</p>
    {[1, 2, 3].map(x => <p key={x}>
      <Link href={`/blog/${x}`}>{`blog#${x}`}</Link>
    </p>)}
  </div>
}

export default Index

export async function getServerSideProps() {
  return {
    props: {
      welcome: await (await services.greeter()).hello('world')
    },
  }
}