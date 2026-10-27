// Junta todos os posts de src/content/posts/*.ts, do mais novo pro mais antigo.
import type { Post } from "../tipos";

const modulos = import.meta.glob<Post>(["./*.ts", "!./index.ts"], { eager: true, import: "default" });

export const posts: Post[] = Object.values(modulos).sort((a, b) =>
  a.publicado === b.publicado ? a.slug.localeCompare(b.slug) : a.publicado < b.publicado ? 1 : -1,
);

export const postPorSlug = (slug: string) => posts.find((p) => p.slug === slug);
