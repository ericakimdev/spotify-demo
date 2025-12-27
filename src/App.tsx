import React, { Suspense, useEffect } from "react";
import { Routes, Route } from "react-router";
import "./App.css";
import LoadingSpinner from "./common/components/LoadingSpinner/LoadingSpinner";
import useExchangeToken from "./hooks/useExchangeToken";
const AppLayout = React.lazy(() => import("./layout/AppLayout")); //lazyloading 필요한 순간에 코드를 끌고 온다 번들사이즈 줄여서 초기 로딩 시간을 단축
const HomePage = React.lazy(() => import("./pages/HomePage/HomePage")); //그때 그때 갖고오니 로딩시간이 필요해진다
const SearchPage = React.lazy(() => import("./pages/SearchPage/SearchPage")); //로딩상태를 보여주는게 좋다 - Suspense가 그걸 도와준다
const SearchWithKeywordPage = React.lazy(
  () => import("./pages/SearchWithKeywordPage/SearchWithKeywordPage")
);
const PlayListDetailPage = React.lazy(
  () => import("./pages/PlayListDetailPage/PlayListDetailPage")
);
const PlayListPage = React.lazy(
  () => import("./pages/PlayListPage/PlayListPage")
);

// 0.side bar (playlist, menu)
// 1. homepage              /
// 2. search page         /search
// 3. search result           /search/:keyword
// 4. playlist detail page        /playlist/:id
// 5. mobile version - playlist         /playlist

// Lasyloading 시 Suspense 써준다
// 로딩상태를 보여주는게 좋다 - Suspense가 그걸 도와준다 fallback loading.. 를 보여준다.

function App() {
  const urlParams = new URLSearchParams(window.location.search);
  let code = urlParams.get("code");
  let codeVerifier = localStorage.getItem("code_verifier");

  const { mutate: exchangeToken } = useExchangeToken();

  useEffect(() => {
    if (code && codeVerifier) {
      exchangeToken({ code, codeVerifier });
    }
  }, [code, codeVerifier, exchangeToken]);

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="search/:keyword" element={<SearchWithKeywordPage />} />
          <Route path="playlist/:id" element={<PlayListDetailPage />} />
          <Route path="playlist" element={<PlayListPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
