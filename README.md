# bla-bla-api

## Installation

- `git clone https://github.com/tningjs/bla-bla-api`
- Install [volta](https://docs.volta.sh/guide/) which manage the toolchain to maks sure the same node version is used: `curl https://get.volta.sh | bash`. After installed, Volta will automatically pull in the node version that list in the `volta` filed under `package.json`
- Register an Agora account, and get an `APP_ID` and `APP_CERTIFICATE` to put into `.env`. [Refer](https://docs.agora.io/en/Voice/product_voice?platform=Web)
- `cd bla-bla-api`
- `yarn install`
- `yarn start`

## How this work

Expressjs API server 🎉

To get a valid Agroa access token:

http://localhost:3000/access-token/?channel={channel}&user={bar}

Params:

- channel: channel name
- user(Optional): user id, If not passed it, token will created by the default user id which is `0`.

Sample request:

http://localhost:3000/access-token/?channel=123

Response:

`{"token":"token string"}`

## Running locally

**Debug mode**

1. `NODE_ENV=debug node --inspect-brk ./bin/www`
2. The terminal will log out something like: `Debugger listening on ws://127.0.0.1:9229/add69dec-7a8e-4571-bd96-d456cb68159b`
3. Open Chrome debug console, paste the url into the navigation bar.
4. Clikc the green node icon in the debug console

**Hot reload mode**

1. `yarn start`
2. visit http://localhost:3000

**Heroku local mode**

1. `heroku local`
2. http://localhost:5000/
3. Note: the port on heroku local is 5000 instead of 3000

## Useful Links

- [Agora Voice Call Overview](https://docs.agora.io/en/Voice/product_voice?platform=Web)
- [LeanStorage JavaScript Guide](https://docs.leancloud.app/leanstorage_guide-js.html)
- [Expressjs](https://expressjs.com/)

## 简介：

我们的作品由两个程序构成（分别对应这个项目下面的两个文件夹）：

- `bla-bla-api` 是在服务器端端运行的程序，主要负责产生和 Agora 连接需要的 Token，由于零时 Token 的时效性很短，这个程序保证了用户访问网页版程序时总是能拿到有效的 Token。源码地址：https://github.com/tningjs/bla-bla-api
- `bla-bla-web` 是用户网页端运行的程序，是这次作品的主体。具体功能描述请参考下面的演示视频，项目背景，以及两个 app 的 `README` 文档。源码地址：https://github.com/tningjs/bla-bla-web

## 演示视频

- 作品展示：[声网 RTE（Real Time Engagement）创新编程挑战赛](https://www.bilibili.com/video/BV11Q4y1R72g/)
- 如何在本地运行：[如何在本地运行 bla-bla](https://www.bilibili.com/video/BV1By4y137p2/)

## 项目背景

在疫情的影响下，基于文字的社交已经不能满足人们的需求，尤其是陌生人社交意味着需要花费很多的时间和精力紧盯着屏幕，交流的延迟感给人很糟糕的体验，而语音的特性提升了交流的时效性，并且你不需要时刻都关注它，达到一种更贴近现实的交流方式。并且用户对于语音社交也有了更高的期望，不再只是以交友、娱乐为目的，有更多的用户希望通过这种形式来创建深层次的沟通、连接更广泛的人脉、获取更有价值的信息。在这个趋势下，到 2021 年初国内外已经推出多款主打语音功能的社交产品，我们也受到这类产品的启发，通过对同类产品和市场的分析，在原有的基础之上进行差异化的组合，使产品更加高效、可行，实现产品创新。

经过近 2 个月时间的产品开发和[不断迭代](#产品的迭代)，我们已经完成了一个较完整的作品。中文名欢言，英文名 bla-bla。可以通过这个域名访问：https://bla-bla.app

1. 在产品功能上，通过集成了[Agora Web SDK](https://docs.agora.io/cn/Voice/API%20Reference/web_ng/index.html)，实现了完整的多个房间、多人实时语音聊天和文字会话功能。
2. 在产品体验上，我们不断打磨整体的使用流程和用户界面的易用性，形成了较流畅的使用体验。并在界面设计上融合了像素游戏风格和一些有趣的动效反馈来提升产品的趣味性和轻松感。
3. 在语音内容上，除了用户自发的语言聊天，我们已经开设了 2 款定期节目在 bla-bla 平台每周进行([往期节目链接](https://bla-bla.club/talkwithmichael/))，并对每期节目进行精剪和包装用于内容推广，同时我们也在不断的扩大内容的话题范围，策划新的节目，吸收优质的内容创作者。希望用内容引导社交，用内容为用户创造价值，以持续吸引用户。

## 产品的迭代

用于参赛的像素风格的作品是我们的第二代产品，在此之前，我们还开发了第一代产品，实现了基本的 feed 流和房间的布局，源码地址：[tornado-web](https://github.com/tningjs/tornado-web)。

在目前的作品的基础上，我们正同时在 Mobile 和 Desktop 平台上开发风格统一，交互更适合目标用户的第三代产品。网页版可以通过 https://bla-bla.lol 访问，目前可以实现基本的用户注册、登录和创建房间等功能。
