"use client";

import { UploadButton } from "@/utils/uploadthing";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export function TopNav() {
  const router = useRouter();
  return (
    <header className="border-b border-white/30 p-4">
      <nav>
        <ul className="w-fulL flex items-center justify-between text-xl font-semibold">
          <li>t3 Gallery</li>
          <li className="flex flex-row items-center justify-center gap-4">
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UploadButton
                endpoint="imageUploader"
                onClientUploadComplete={() => {
                  router.refresh();
                }}
              />
              <UserButton />
            </SignedIn>
          </li>
        </ul>
      </nav>
    </header>
  );
}
