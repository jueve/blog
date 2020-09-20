import React from "react";
import Link from "next/link";

export function HomeHeader(): JSX.Element {
  return (
    <div className="mb-5 mt-10">
      <div className="flex">
        <div className="flex-initial">
          <img className="rounded-full mr-2" src="/assets/profile/icon.png" alt="avatar of cashitsuki" />
        </div>
        <div className="flex-initial">
          <h1 className="text-2xl">cashitsuki</h1>
        </div>
      </div>
      <div className="mt-2 flex">
        <div className="pr-2 pb-2 mr-2">
          <Link href="/">
            <a className="text-xl text-blue-600 underline">Home</a>
          </Link>
        </div>
        <div className="pr-2 pb-2 mr-2">
          <Link href="/about">
            <a className="text-xl text-blue-600 underline">About</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
