import React from "react";

function ResultList(props) {
  return (
    <div className="list-group col">
      {props.results.map(result => (
        <section className="list-group-item" key={result.id}>
          <video
            controls
            autoPlay
            loop
            src={result.images.downsized_small.mp4}
          />

          <br></br>

          <button type="button" class="btn btn-primary">
            {" "}
            Copy GIF to Clipboard
          </button>
        </section>
      ))}
    </div>
  );
}

export default ResultList;
