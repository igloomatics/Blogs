import type { APIRoute } from 'astro';
import { Redis } from '@upstash/redis';

export const prerender = false;

const DEFAULT_COUNT = 0;
const KEY = 'blog_likes';

function getRedis(): Redis {
  const url = import.meta.env.UPSTASH_REDIS_REST_URL;
  const token = import.meta.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) {
    throw new Error(
      'Missing UPSTASH_REDIS_REST_URL or UPSTASH_REDIS_REST_TOKEN. ' +
      'Add them in Vercel Project Settings → Environment Variables, or in .env for local dev.'
    );
  }
  return new Redis({ url, token });
}

export const GET: APIRoute = async () => {
  try {
    const redis = getRedis();
    const raw = await redis.get(KEY);
    const count = raw === null ? DEFAULT_COUNT : Number(raw);
    return new Response(JSON.stringify({ count }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching likes:', error);
    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : 'Internal Server Error',
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};

export const POST: APIRoute = async () => {
  try {
    const redis = getRedis();
    const raw = await redis.get(KEY);
    let count: number;
    if (raw === null) {
      count = DEFAULT_COUNT + 1;
      await redis.set(KEY, count);
    } else {
      count = await redis.incr(KEY);
    }
    return new Response(JSON.stringify({ count }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error incrementing likes:', error);
    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : 'Internal Server Error',
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
