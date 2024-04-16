import { db } from "@/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <main>
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
    </main>
  );
}
