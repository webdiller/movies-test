import DefaultLayout from "@/layouts/DefaultLayout";
import CustomHead from "@/layouts/CustomHead";
import MovieLayout from "components/sections/Movies/MovieLayout";
import Pagination from "@/sections/Pagination";

export default function Home({ movies }) {
  return (
    <>
      <CustomHead title="Главная" />
      <MovieLayout movies={movies} />
      {movies.total_pages > 0 && (
        <Pagination total_pages={movies.total_pages} />
      )}
    </>
  );
}

export async function getServerSideProps(context) {
  const { q: query, p: page } = context.query;
  const res = await fetch(
    `https://movies-test.grapi.ru/search?q=${query}&p=${page}`
  );
  const movies = await res.json();
  if (movies.results.length <= 0) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
      props: {},
    };
  } else {
    return {
      props: {
        movies,
      },
    };
  }
}

Home.getLayout = function getLayout(page) {
  return (
    <DefaultLayout description="Website main page description" title="Главная">
      {page}
    </DefaultLayout>
  );
};
