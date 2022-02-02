import Link from "next/link";

import { useRouter } from "next/router";
export default function Pagination({ total_pages }) {
  const router = useRouter();
  const { q, p } = router.query;
  const pathWithoutPageQuery = (page) => `${router.route}?q=${q}&p=${page}`;
  const pages = Array.from(Array(total_pages), (item, indx) => {return indx + 1});
  return (
    <div className="pagination">
      <nav className="container pagination__container">
        {pages.map((item, indx) => {
          return (
            <Link key={indx} href={pathWithoutPageQuery(item)} replace>
              <a className={p == item ? "ui-button ui-button_active pagination__item" : "ui-button pagination__item"}>{item}</a>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}