# Carbon Stack static

Static assets for Carbon Stack

## Why?

Next.js recommends using CDN for static file. This is because they acutally doesn't support cache control yet. So, we need other way to do.

## How?

To considering easier maintenance, using unpkg.org seems to be quite reasonable. It is free and we could exploit npm as a version manager for static assets.

Also, by lerna, we can manage multiple packages by a single git repository.

## License

MIT
