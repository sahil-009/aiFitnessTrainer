import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen p-4">
            <SignIn />
        </main>
    );
}