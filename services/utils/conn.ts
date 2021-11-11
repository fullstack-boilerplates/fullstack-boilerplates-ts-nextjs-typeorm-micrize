import "reflect-metadata"
import { join } from "path"
import { createConnection } from "typeorm"
import { Blog } from "../blog"

const { MYSQL } = process.env

let conn: any = undefined
let commonOpts = {
  entities: [Blog],
  synchronize: true
}, dbOpts = MYSQL
  ? {
    type: 'mysql',
    url: MYSQL
  }
  : {
    type: 'sqlite',
    database: join(process.cwd(), 'database.sqlite'),
  }

export async function connect() {
  // @ts-ignore
  if (!conn) conn = await createConnection({
    ...dbOpts,
    ...commonOpts
  })
  if (!await Blog.count()) {
    await Blog.createQueryBuilder()
      .insert()
      .values([1, 2, 3].map(x => ({ title: `this is blog#${x}` })))
      .execute()
  }
  return conn
}