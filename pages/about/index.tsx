import React from "react";
import { HomeHeader } from "../../components/HomeHeader";
import Head from "next/head";


export default function Index(): JSX.Element {
  return (
    <div>
      <Head>
        <title key="title-about">About | cashitsuki</title>
        <link rel="canonical" href="/about" key="canonical-about" />
      </Head>
      <HomeHeader />
      <div className="mb-10">
        <div className="flex">
          <div className="mt-3 rounded-full h-3 w-3 bg-gray-600 mr-1" />
          <h2 className="text-2xl border-gray-600">Me</h2>
        </div>
        <ul>
          <li>
            <a className="underline text-blue-600" href="https://github.com/jueve">
              GitHub
            </a>
          </li>
          <li>
            <a className="underline text-blue-600" href="https://twitter.com/cashitsuki">
              Twitter
            </a>
          </li>
        </ul>
      </div>

      <div className="mb-10">
        <div className="flex">
          <div className="mt-3 rounded-full h-3 w-3 bg-gray-600 mr-1" />
          <h2 className="text-2xl border-gray-600">Skills</h2>
        </div>
        <ul>
          <li className="mb-3">
            <div>
              <h3 className="text-lg">JavaScript</h3>
              <p>一番得意な言語</p>
            </div>
          </li>
          <li className="mb-3">
            <div>
              <h3 className="text-lg">Haskell</h3>
              <p>競技プログラミングで使用</p>
            </div>
          </li>
        </ul>
      </div>

      <div className="mb-10">
        <div className="flex">
          <div className="mt-3 rounded-full h-3 w-3 bg-gray-600 mr-1" />
          <h2 className="text-2xl border-gray-600">Works</h2>
        </div>
        <ul>
          <li className="mb-4">
            <div>
              <h3 className="text-lg">
                <a className="underline text-blue-600" href="https://github.com/jueve/atcoder-review">
                  AtCoder Review
                </a>
              </h3>
              <p>
                競技プログラミングサイトAtCoderの復習を手助けするクロスプラットフォームのデスクトップアプリケーション
              </p>
            </div>
          </li>
          <li className="mb-4">
            <h3 className="text-lg">
              <a className="underline text-blue-600" href="https://github.com/jueve/iris">
                IRIS
              </a>
            </h3>
            <p>ファミコンエミュレータ(未完成)</p>
            <a className="underline text-blue-600" href="./article/writing-nes-emulator">
              関連記事
            </a>
          </li>
        </ul>
      </div>

      <div className="mb-10">
        <div className="flex">
          <div className="mt-3 rounded-full h-3 w-3 bg-gray-600 mr-1" />
          <h2 className="text-2xl border-gray-600">Certifications</h2>
        </div>
        <ul>
          <li>
            <a className="underline text-blue-600" href="https://atcoder.jp/users/cashitsuki">
              AtCoder茶色
            </a>
          </li>
          <li>
            <p>
              <a className="underline text-blue-600" href="https://past.atcoder.jp/">
                アルゴリズム実技検定
              </a>
              初級
            </p>
          </li>
          <li>英検準一級</li>
        </ul>
      </div>
    </div>
  );
}
