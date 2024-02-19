import Header from "./ui/header/header";
import Collection from "./ui/collection/collection";
import { Suspense } from 'react';
import Skeleton from "./ui/skeleton/skeleton";
import Values from "./ui/our/values";
import Commitment from "./ui/our/commitment";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Suspense fallback={<Skeleton />}>
          <Collection />
        </Suspense>
        <h1 className="text-custom-gray text-2xl font-extrabold mt-12 mb-12">Our <span className="text-custom-red">values </span>stand steadfast</h1>
       <Values/>
       <div className="h-px w-full bg-black mt-10"></div>
       <Commitment/>
      </main>
    </>
  );
}
