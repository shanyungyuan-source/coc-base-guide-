import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const articles = await getCollection('articles');
  const index = articles.map(a => ({
    slug: a.slug,
    title: a.data.title,
    description: a.data.description,
    tags: a.data.tags ?? [],
    date: a.data.date.toISOString().slice(0, 10),
    // First 300 chars of body text for snippet matching
    body: a.body.replace(/[#*`\[\]>|-]+/g, ' ').replace(/\s+/g, ' ').slice(0, 300),
  }));
  return new Response(JSON.stringify(index), {
    headers: { 'Content-Type': 'application/json' },
  });
};
