import { getMyImages } from "@/server/queries";
import { SignedIn, SignedOut } from "@clerk/nextjs";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();

  return (
    <section className="flex flex-wrap gap-4">
      {images?.map((image) => (
        <picture
          key={image.id}
          className="flex aspect-video w-48 flex-col items-center justify-between gap-2"
        >
          <img src={image.url} alt={image.name} />
          <p>{image.name}</p>
        </picture>
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
