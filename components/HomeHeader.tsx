import React from "react";
import Link from "next/link";

export function HomeHeader(): JSX.Element {
  return (
    <div className="mb-20 py-6">
      <div className="flex">
        <div className="flex-1 flex">
          <div>
            <img className="rounded-full mr-2" src="/assets/profile/icon.png" alt="avatar of cashitsuki" />
          </div>
          <div>
            <Link href="/">
              <a>
                <h1 className="text-xl">cashitsuki</h1>
              </a>
            </Link>
          </div>
        </div>
        <div className="flex-1 flex flex-row-reverse">
          <div className="mr-4">
            <Link href="/about">
              <a className="text-xl text-blue-700">About</a>
            </Link>
          </div>
          <div className="mr-4">
            <Link href="/">
              <a className="text-xl text-blue-700">Home</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
