import Image from 'next/image';
import { getMyImages } from "~/server/queries";

export const dynamic = 'force-dynamic';

export default async function ImageList() {
    const images = await getMyImages();

    return (
        <div className="flex flex-wrap gap-4">
            {images.map((image) => (
                <div key={image.id} className="p-4">
                    <Image src={image.url} width={300} height={250} alt={image.name}/>
                </div>
            ))}
        </div>
    );
}
