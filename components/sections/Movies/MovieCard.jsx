import UiBadge from "@/shared/UiBadge";
import Image from "next/image";
import imagePlaceholder from "@/base/image-placeholder.png";
import { useState } from "react";
import { detectMovieType } from "helpers";

const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str) => (typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str));

export default function MovieCard({
  rating,
  mediaType,
  title,
  poster_path,
  original_title,
  name,
}) {
  const [src, setSrc] = useState(`https://movies-test.grapi.ru/img${poster_path}`);

  const namesOfMovie = [title, original_title, name];
  const notUndefinedMovieName = namesOfMovie.find((element) => element !== undefined);
  return (
    <div className="movies__item">
      <div className="movies__item-img-wrapper">
        <Image
          objectFit="cover"
          alt={title}
          width={232}
          height={348}
          src={src}
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
          onError={() => setSrc(imagePlaceholder.src)}
          className="movies__item-img"
        />
      </div>
      <p className="movies__item-media-type">{detectMovieType(mediaType)}</p>
      <p className="movies__item-title">{notUndefinedMovieName}</p>
      {rating !== undefined && (
        <UiBadge ratingValue={rating} customClass="movies__item-badge" />
      )}
    </div>
  );
}
