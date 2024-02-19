import Image from 'next/image';

interface IconComponentProps {
    path: string;
}

const IconComponent: React.FC<IconComponentProps> = ({ path }) => {
    return (
        <div className="bg-custom-lightgray p-4 rounded-full mr-8">
            <Image src={`/icons/${path}`} alt="Icon" width={80} height={80} />
        </div>
    );
};

export default IconComponent;