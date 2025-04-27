import { SignedOut, SignedIn, SignInButton ,SignOutButton } from "@clerk/nextjs";

export default function HomePage() {
  return (
    <div>
    homepage
    <SignedOut>
      <SignInButton />
    </SignedOut>  

    <SignedIn>
      <SignOutButton />
    </SignedIn>
    </div>
  );
}