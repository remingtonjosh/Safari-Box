import React from "react";

function ResultList(props) {
  return (
    <div className="list-group row">
      {props.results.map(result => (
        <section className="list-group-item col" key={result.id}>
          <video autoplay controls src={result.images.downsized_small.mp4} />

          <br></br>

          <button
            type="button"
            class="btn btn-primary"
            data-url={result.images.downsized_small.mp4}
            onClick={() => props.copy(result.images.downsized_small.mp4)}
          >
            Copy GIF to Clipboard
          </button>
        </section>
      ))}
    </div>
  );
}

export default ResultList;
