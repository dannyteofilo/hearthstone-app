import Image from "next/image";
import Header from "./ui/header/header";
import Collection from "./ui/collection/collection";
import { Suspense } from 'react';
import Skeleton from "./ui/skeleton/skeleton";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Suspense fallback={<Skeleton />}>
      <Collection />
        </Suspense>        
      </main>
    </>
  );
}
