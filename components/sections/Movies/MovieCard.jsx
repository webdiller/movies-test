import UiBadge from "@/shared/UiBadge";
import Image from "next/image";
import imagePlaceholder from "@/base/image-placeholder.png";
import { useState } from "react";
import { detectMovieType } from "helpers";

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
          quality={100}
          width={232}
          height={348}
          layout="responsive"
          src={src}
          placeholder="blur"
          blurDataURL={imagePlaceholder}
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
