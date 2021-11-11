# ts-nextjs-micrize
fullstack microservice bolierplate with next.js | 基于 next.js 的微服务全栈模板

## structure | 文件结构

```
+-- common
|   +--  routes.ts # define routes for both frontend and backend | 前后端公用的路由信息
+-- pages # nextjs pages | nextjs 页面
+-- services
    +-- index.ts # expose all services | 统一暴露所有微服务
    +-- *.ts # other micro services | 其他微服务
```

## usage | 使用

dev | 开发

```
npm run dev
```

production | 产线

```
npm run build
npm run start
```

docker-compose

```
docker-compose up
```
