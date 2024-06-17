import { SignInButton, SignedOut, SignedIn, UserButton} from '@clerk/nextjs'

export default function TopNav() {
    return (
        <nav className="flex justify-between p-4 w-full border-b font-semibold">
            <div>Gallery</div>

            <div>
                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>

            </div>
        </nav>
    )
}