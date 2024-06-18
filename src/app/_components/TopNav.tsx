'use client';

import { SignInButton, SignedOut, SignedIn, UserButton} from '@clerk/nextjs'
import {UploadButton} from "~/app/utils/uploadthings";
import {useRouter} from "next/navigation";

export default function TopNav() {
    const router = useRouter();

    return (
        <nav className="flex justify-between p-4 w-full border-b font-semibold">
            <div>Gallery</div>

            <div className="flex flex-row">
                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <UploadButton
                        className="mr-16"
                        endpoint="imageUploader"
                        onClientUploadComplete={() => {
                            router.refresh();
                        }}/>
                    <UserButton />
                </SignedIn>
            </div>
        </nav>
    )
}