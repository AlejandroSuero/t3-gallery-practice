import { getMyImages } from "@/server/queries";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();

  return (
    <section className="flex flex-wrap justify-center gap-4">
      {images?.map((image) => (
        <div
          key={image.id}
          className="flex flex-col items-center justify-between gap-4"
        >
          <Image
            className="h-28 w-48 object-contain"
            src={image.url}
            alt={image.name}
            width={192}
            height={128}
          />
          <p>{image.name}</p>
        </div>
      ))}
    </section>
  );
}

export default function HomePage() {
  return (
    <main>
      <SignedOut>
        <div className="h-full w-full text-center text-4xl font-bold">
          <p>Please sign in above to see images</p>
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
