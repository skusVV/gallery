import { SignedOut, SignedIn } from '@clerk/nextjs'
import ImageList from "~/app/_components/ImageList";

export const dynamic = 'force-dynamic';

export default async function HomePage() {

    return (
        <main  >
            <SignedOut>Please, Sign In!</SignedOut>
            <SignedIn>
                <ImageList />
            </SignedIn>
        </main>
    );
}
