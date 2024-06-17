import { SignInButton, SignedOut, SignedIn, UserButton} from '@clerk/nextjs'
import {UploadButton} from "~/app/utils/uploadthings";

export default function TopNav() {
    return (
        <nav className="flex justify-between p-4 w-full border-b font-semibold">
            <div>Gallery</div>

            <div className="flex flex-row">
                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <UploadButton className="mr-16" endpoint="imageUploader"/>
                    <UserButton />
                </SignedIn>

            </div>
        </nav>
    )
}