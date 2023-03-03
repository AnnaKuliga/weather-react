import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <div className="Footer">
      <div className="referenceLink">
        <div>
          <small>
            <a
              href="https://github.com/AnnaKuliga/My-Weather-App"
              target="_blank"
            >
              Open-source code
            </a>
            by
            <a
              href="https://www.linkedin.com/in/anna-kuliga-967186224/"
              target="_blank"
            >
              Anna Kuliga
            </a>
            <br />
            Photo by
            <a href="https://unsplash.com/@ujitomo" target="_blank">
              {" "}
              Tomoko Uji{" "}
            </a>{" "}
            on Unsplash
          </small>
        </div>
      </div>
    </div>
  );
}
