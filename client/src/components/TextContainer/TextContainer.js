import React from "react";

import "./TextContainer.css";

const TextContainer = ({ users }) => (
  <div className="textContainer">
    {users ? (
      <div>
        <h2>Currently online:</h2>
        <div className="activeContainer">
          <p className="online">
            {users.map(({ name }) => (
              <div key={name} className="activeItem">
                <span className="onlineMember">
                  <i class="far fa-dot-circle"></i>
                </span>
                {name}
              </div>
            ))}
          </p>
        </div>
      </div>
    ) : null}
  </div>
);

export default TextContainer;
