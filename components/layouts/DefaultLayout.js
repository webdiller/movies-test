import Search from "@/shared/Search";

export default function DefaultLayout({ children }) {
  return (
    <>
      <Search placeholder="Название фильма или сериала..." />
      {children}
    </>
  );
}
