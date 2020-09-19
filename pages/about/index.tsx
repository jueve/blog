import React from "react";
import { HomeHeader } from "../../components/HomeHeader";

export default function Index(): JSX.Element {
  return (
    <div>
      <HomeHeader />
      <div className="mb-10">
        <h2 className="text-2xl">Me</h2>
        <ul className="list-disc">
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
        <h2 className="text-2xl">Skills</h2>
        <ul className="list-disc">
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
        <h2 className="text-2xl">Works</h2>
        <ul className="list-disc">
          <li className="mb-3">
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
          <li className="mb-3">
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
        <h2 className="text-2xl">Certifications</h2>
        <ul className="list-disc">
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
