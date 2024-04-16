const MOCK_URLS = [
  "https://utfs.io/f/818f504b-fbbe-4a07-ac4a-11ac29b8dcfe-y2lo9w.jpg",
  "https://utfs.io/f/cc6ef621-a412-469e-8e7b-55a0ec9a1cde-50ro4l.jpg",
  "https://utfs.io/f/dcc96e56-d0a0-4724-a091-0daf6e0a85ea-nbiui3.jpg",
  "https://utfs.io/f/5bbf6fb1-2dae-4e57-8fcb-aa6deab26f09-got8td.jpeg",
] as const;

const mockImages = MOCK_URLS.map((url, index) => ({
  id: `mock-image-${index + 1}`,
  url,
}));

export default function HomePage() {
  return (
    <main>
      <section className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <picture
            key={image.id + "-" + index}
            className="flex aspect-video w-48 items-center"
          >
            <img src={image.url} alt="A mock image" />
          </picture>
        ))}
      </section>
    </main>
  );
}
