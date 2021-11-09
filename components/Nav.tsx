import Link from 'next/link'

const Nav = () => {
  return <div>
    <Link href="/"><a>首页</a></Link> |
    <Link href="/about"><a>关于</a></Link>
  </div>
}

export default Nav