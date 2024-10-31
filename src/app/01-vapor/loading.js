import React from "react";

import LibraryGameCardSkeleton from "@/components/LibraryGameCardSkeleton";
import range from "lodash.range";

function VaporLoading() {
  return (
    <section className="max-width-wrapper">
      <header className="library-header">
        <h1>My games</h1>
      </header>
      <div className="game-grid">
        {range(12).map((_, index) => (
          <LibraryGameCardSkeleton key={index} />
        ))}
      </div>
    </section>
  );
}

export default VaporLoading;