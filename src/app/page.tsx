import Image from 'next/image';
import { db } from '~/server/db/index';
import { SignedOut, SignedIn} from '@clerk/nextjs'
import {UploadButton} from "~/app/utils/uploadthings";

export const dynamic = 'force-dynamic';

export default async function HomePage() {
    const images = await db.query.images.findMany({
        orderBy: (model, {desc} ) => desc(model.id)
    });

    return (
        <main  >
            <SignedOut>Please, Sign In!</SignedOut>
            <SignedIn>
                <div className="flex flex-wrap gap-4">
                    {images.map((image) => (
                        <div key={image.id} className="p-4">
                            <Image src={image.url} width={300} height={250} alt={image.name}/>
                        </div>
                    ))}
                </div>
            </SignedIn>
        </main>
    );
}
