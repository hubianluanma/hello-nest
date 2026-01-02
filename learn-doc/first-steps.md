## 初始化项目

首先安装 nest-cli 脚手架。

```bash
npm i -g @nestjs/cli
nest new hello-nest
```

> 如果要创建开启 stricter 功能的 ts 项目，在新建的时候需要将 `--strict` 标志传递给 `nest new` 命令

执行完 `nest new hello-nest` 后， hello-nest 目录会被创建，同时模版文件会被创建，并创建了一个 `/src` 目录，并填充多个核心文件。

```bash
src
    app.controller.spec.ts
    app.controller.ts
    app.module.ts
    app.service.ts
    main.ts
```


- app.controller.ts: 一个基础的 Controller
- app.controller.spec.ts: 对应 Controller 的单元测试.
- app.module.ts: 应用程序的根模块
- app.module.ts: 一个基础 Service
- main.ts: 应用程序的入口文件，使用核心函数 NestFactory 来创建 Nest 应用实例

```ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
````
上面是 main.ts 最简单的初始化代码，不过上面的这段代码当我们程序在创建过程中出现任何错误的话会以代码`1`退出，如果我们想让它抛出具体的错误可以将 `abortOnError` 设置为 `false`。
像下面这样：
```ts
const app = await NestFactory.create(AppModule, { abortOnError: false });
````

## Platform

Nest 的目标是成为一个平台无关的框架。平台独立性可以使开发者能够创建重复使用的逻辑部分，这些部分可以在多种不同类型的应用中加以利用。从技术上来说，一旦创建了适配器，Nest就能与任何 Node HTTP框架兼容。开箱即用两种 HTTP 平台：`express` 和 `fastify`。

`platform-express`: Express 是一个著名的极简主义 Node 网络框架。默认使用 `@nestjs/platform-express`。
`platform-fastify`: Fastify 是一个高性能且低开销的框架，专注于效率和速度。

无论使用哪一个平台，它们都暴露了自己的应用接口，分别为：

- express: `NestExpressApplication`
- fastify: `NestFastifyApplication`

当我们在创建应用程序时可以指定类型传递给 `NestFactory.create` 方法，例如下面这样：

```ts
const app = await NestFactory.create<NestExpressApplication>(AppModule);
```
这样应用对象将会拥有专门针对该平台的方法。不过请注意，除非你真的想访问底层平台 API ，否则不需要指定类型。

## 运行应用程序

```bash
npm run start
```

> 为了加快开发流程（构建速度快20倍），你可以通过将 `-b swc` 标志传递给 start 脚本，以启用 swc 构建起

```bash
npm run start -- -b swc
```
在开发过程中，我们为了监听文件的变化，可以使用 `npm run start:dev` 来启动，通过它启动当我们的文件发生变化时，应用将自动重新编译。

## Linting & Formatting

```bash
npm run lint
```
```bash
npm run format
```
