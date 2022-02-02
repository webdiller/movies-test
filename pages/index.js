import DefaultLayout from "@/layouts/DefaultLayout";
import CustomHead from "@/layouts/CustomHead";
import Search from "@/shared/Search";
import MovieLayout from "components/sections/Movies/MovieLayout";
import Pagination from "@/sections/Pagination";

export default function Home() {
  return (
    <>
      <CustomHead title="Главная" />
      <MovieLayout />
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return (
    <DefaultLayout description="Website main page description" title="Главная">
      {page}
    </DefaultLayout>
  );
};
