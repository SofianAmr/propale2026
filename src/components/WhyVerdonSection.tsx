import Image from "next/image";
import { gorgesImageAlt } from "@/config/gallery";
import { gorgesAssetUrl } from "@/lib/gorgesAssetUrl";

const ARGUMENTS: { file: string; title: string }[] = [
  { file: "vue-aerienne-verdon-barques.png", title: "Eau turquoise" },
  { file: "randonnee-sentiers-verdon.png", title: "Falaises & sentiers" },
  { file: "cascade-bassin-turquoise.png", title: "Soleil & baignade" },
  { file: "lavande-village-provence.png", title: "Provence à portée" },
  { file: "kayak-canyon-turquoise.png", title: "Canyon & sensations" },
];

type Props = {
  imageFiles: string[];
};

export function WhyVerdonSection({ imageFiles }: Props) {
  const items = ARGUMENTS.map((a) => ({
    ...a,
    src: imageFiles.includes(a.file) ? a.file : null,
  }));

  return (
    <section
      id="pourquoi"
      className="scroll-mt-17 border-t border-stone-200 bg-white px-4 py-14 sm:px-6 sm:py-16 md:px-10 md:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-2xl text-stone-900 sm:text-3xl md:text-4xl">
          Pourquoi le Verdon
        </h2>
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-5">
          {items.map((item) => (
            <li
              key={item.title}
              className="relative aspect-4/5 overflow-hidden rounded-xl bg-stone-100 shadow-sm ring-1 ring-stone-200/80 sm:aspect-3/4"
            >
              {item.src ? (
                <Image
                  src={gorgesAssetUrl(item.src)}
                  alt={gorgesImageAlt[item.src] ?? item.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 18vw, (min-width: 640px) 45vw, 100vw"
                />
              ) : (
                <div
                  className="absolute inset-0 flex items-center justify-center bg-stone-200/90 font-sans text-xs text-stone-500"
                  aria-hidden
                >
                  Visuel
                </div>
              )}
              <div className="absolute inset-0 bg-linear-to-t from-stone-950/88 via-stone-950/20 to-transparent" />
              <p className="absolute bottom-0 left-0 right-0 p-3 font-display text-base text-white sm:p-4 sm:text-lg">
                {item.title}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
