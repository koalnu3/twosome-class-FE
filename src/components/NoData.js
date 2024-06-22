import React from "react";

const NoData = ({ children, icon }) => {
  const defaultText = "데이터를 찾을 수 없습니다.";
  return (
    <div className="noData">
      {!icon ? (
        ``
      ) : (
        <div className="icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
          </svg>
        </div>
      )}
      {!children ? defaultText : children}
    </div>
  );
};

export default NoData;
