import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

//리액트 쿼리를 쓰는데 옵션세팅값을 세팅하는 씀
// const queryClient = new QueryClient({retry:1});  //실패시 재호출 1번 더해준다. 0이면 안하는것
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1, // 전역 쿼리 재시도 횟수 설정
    },
  },
});

// ThemeProvider (mui 에서 온것) 로 theme 설정을 한것
// CssBaseline mui에서 온다. 스타일의 초기값을 mui에서 지원하는 걸로 일정하게 셋팅한다
// 다양한 브라우저도 일관성있게 유지하게 해줌
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </ThemeProvider>
    </BrowserRouter>
    ,
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
