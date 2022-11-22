import React, { Component, Suspense } from "react";
// import LazyLoadingFirst from "./LazyLoadingFirst";
import LazyLoadingSecond from "./LazyLoadingSecond";

const LazyLoadingFirst = React.lazy(() => import("./LazyLoadingFirst"));

class LazyLoading extends Component {
  render() {
    return (
      <div>
        <Suspense fallback={<h1 style={{ color: "red" }}>Loading....</h1>}>
          <LazyLoadingFirst></LazyLoadingFirst>
        </Suspense>
        <LazyLoadingSecond></LazyLoadingSecond>
      </div>
    );
  }
}

export default LazyLoading;
