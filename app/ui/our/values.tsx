import Image from 'next/image';

export default function Values() {
    return (
        <div className="w-full mt-10">
            <h1 className="text-custom-gray text-2xl font-extrabold mt-12 mb-12">Our <span className="text-custom-red">values</span></h1>
            <div className="flex flex-col md:flex-row items-center">
                <div className="bg-custom-lightgray p-4 rounded-full mr-8">
                    <Image src="/icons/group.svg" alt="Icon" width={80} height={80} />
                </div>
                <ul className="mt-4 md:mt-0">
                    <li>Time</li>
                    <li>Dependability</li>
                    <li>Tenacity</li>
                    <li>Communication</li>
                    <li>Integrity</li>
                </ul>
            </div>
        </div>
    )
}