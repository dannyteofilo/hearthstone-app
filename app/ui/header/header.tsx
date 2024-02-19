import Image from 'next/image'
import Link from 'next/link';
export default function Header() {
    return (
        <header className="flex flex-col md:flex-row justify-between items-center bg-blue-500x h-96">
            <div className="flex flex-col items-start justify-center space-y-4 pl-12 pr-12 md:pl-12 md:pr-12 h-full md:w-2/5">
                <h1 className="text-5E5E5E text-2xl font-extrabold">We&apos;re focused on making you shine</h1>
                <h3 className="text-5E5E5E text-xs w-3/5">We hold the belief that time is the most invaluable resource</h3>
                <Link href="https://github.com/dannyteofilo/hearthstone-app" className="bg-custom-red text-white px-4 py-2 rounded-full">Your Github account
                </Link>
            </div>
            <div className="hidden md:block w-full md:w-3/5 h-full relative">
                <Image src="/images/1.jpg" alt="Imagen de fondo" layout="fill" objectFit="cover" />
            </div>
        </header>
    );
}