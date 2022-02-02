import Search from "@/shared/Search";

export default function DefaultLayout({ children }) {
  return (
    <>
      <Search />
      {children}
    </>
  );
}
