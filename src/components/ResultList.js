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

          <a
            href='" +
                  response.data[i].url +
            "'
          >
            " + response.data[i].url + "{" "}
          </a>
        </section>
      ))}
    </div>
  );
}

export default ResultList;
