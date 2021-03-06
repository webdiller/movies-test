import { useEffect, useRef, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import UiButton from "@/shared/UiButton";
import { useRouter } from "next/router";

export default function Search({ placeholder }) {
  const router = useRouter();
  const [currentSearch, setCurrentSearch] = useState("");
  const [focused, setFocused] = useState(false);
  const [loading, setLoding] = useState(false);

  const formRef = useRef()
  const focusedHandler = (focus) => () => setFocused(focus);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (currentSearch) {
      try {
        setLoding(true)
        const res = await fetch(`https://movies-test.grapi.ru/search?q=${currentSearch}&p=1`);
        const movies = await res.json();
        if (movies.results.length === 0) {
          setLoding(false)
          alert("Нет результатов");
          event.target.searchValue.focus();
        } else {
          setLoding(false)
          router.push(`/movies?q=${currentSearch}&p=1`);
        }
      } catch (error) {
        console.log(error);
        return error;
      }
    }
  };

  const handleChange = (event) => {
    const {value} = event.target;
    setCurrentSearch(value)
  }

  const handleReset = () => {
    setCurrentSearch("")
    router.push(`/`);
    formRef.current.searchValue.focus();
  };

  useEffect(() => {
    const { route, query } = router;
    const { q } = query;
    if (route === "/movies") {
      setCurrentSearch(q);
    }
  }, [router]);

  useEffect(() => {
    const onEventHandler = (event) => {
      if (event.keyCode === 27 && focused) {
        setCurrentSearch("");
        router.push(`/`);
      }
    };
    document.addEventListener("keydown", onEventHandler);

    return () => {
      document.removeEventListener("keydown", onEventHandler);
    };
  }, [focused, router]);

  return (
    <div
      className={
        focused
          ? "search search_with-margins"
          : "search search_with-margins disabled"
      }
    >
      <form ref={formRef} onSubmit={handleSubmit} className="container search__container">
        <div className="search__group">
          <BiSearch className="search__icon search__icon-search" />
          <input
            onFocus={focusedHandler(true)}
            onBlur={focusedHandler(false)}
            onChange={handleChange}
            value={currentSearch}
            placeholder={placeholder}
            type="text"
            name="searchValue"
            className="search__input"
          />
          <button
            type="reset"
            onClick={handleReset}
            onFocus={focusedHandler(true)}
            onBlur={focusedHandler(false)}
            className="search__icon-wrapper"
          >
            <IoMdClose className="search__icon search__icon-close" />
          </button>
        </div>
        <UiButton
          type="submit"
          tagName="button"
          innerText="Найти"
          disabled={loading ? true : false}
          customClass={loading ? "ui-button_loading search__button" : "search__button"}
        />
      </form>
    </div>
  );
}
