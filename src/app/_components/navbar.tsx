import {
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export function TopNav() {
  return (
    <header className="border-b border-white/30 p-4">
      <nav>
        <ul className="w-fulL flex items-center justify-between text-xl font-semibold">
          <li>t3 Gallery</li>
          <li>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </li>
        </ul>
      </nav>
    </header>
  );
}
