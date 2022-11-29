import { useEffect, useState } from "react";

function PageList({ isActive, isDisabled = false, value, handleClick }) {
  let buttonStyle =
    "w-9 h-9 rounded-sm flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 active:outline-none active:ring-2";
  let iconStyle = "";

  if (isActive) {
    buttonStyle = `${buttonStyle} bg-red-500 hover:bg-red-600`;
    iconStyle = "text-primaryLight";
  } else {
    buttonStyle = `${buttonStyle} bg-transparent hover:bg-red-100`;
    iconStyle = "text-neutralDark";
  }

  if (isDisabled) {
    buttonStyle = `${buttonStyle} cursor-not-allowed`;
  }

  return (
    <button
      type="button"
      className={buttonStyle}
      disabled={isDisabled}
      onClick={handleClick}
    >
      <span className={iconStyle}>{value}</span>
    </button>
  );
}

function PageArrow({ isActive = false, handleClick, type = "left" }) {
  let buttonStyle =
    "rounded-sm gap-2.5 flex items-center justify-center w-8 h-8";
  let icon = "<";

  if (isActive) {
    buttonStyle = `${buttonStyle} bg-red-500 hover:bg-red-600 cursor-pointer`;
  } else {
    buttonStyle = `${buttonStyle} bg-transparent cursor-not-allowed`;
  }

  if (type === "right") {
    icon = ">";
  }

  return (
    <button
      type="button"
      className={buttonStyle}
      disabled={isActive ? false : true}
      onClick={handleClick}
    >
      <div className="text-black">{icon}</div>
    </button>
  );
}

export default function Pagination({
  totalPage,
  currentPage,
  setCurrentPage,
  isLoading = false,
}) {
  const [listPagination, setListPagination] = useState([]);

  const handleButtonNext = () => {
    setCurrentPage(currentPage + 1);
  };
  const handleButtonPrevious = () => {
    setCurrentPage(currentPage - 1);
  };

  useEffect(() => {
    let list = [];
    // jika total pagination kurang dari 5
    if (totalPage <= 5) {
      for (let i = 1; i <= totalPage; i++) {
        list.push(i);
      }
      // jika pagination sudah berada di halaman 4 dan total halaman tidak sama dengan 4
    } else if (currentPage > 3 && currentPage < totalPage - 2) {
      list.push(currentPage - 2);
      list.push(currentPage - 1);
      list.push(currentPage);
      list.push(currentPage + 1);
      list.push(currentPage + 2);
      // jika masih di page sebelum 4
    } else if (currentPage <= 3) {
      for (let i = 1; i <= 5; i++) {
        list.push(i);
      }
      // jika berada di 5 halaman terakhir
    } else if (currentPage >= totalPage - 2) {
      list.push(totalPage - 4);
      list.push(totalPage - 3);
      list.push(totalPage - 2);
      list.push(totalPage - 1);
      list.push(totalPage);
    }
    setListPagination(list);
  }, [currentPage]);

  return (
    <div className="flex flex-row items-center justify-between whitespace-nowrap">
      <PageArrow
        type="left"
        isActive={currentPage !== 1 && !isLoading}
        handleClick={handleButtonPrevious}
      />
      {listPagination.map((value) => (
        <PageList
          key={`pagination-list-${value}`}
          value={value}
          isActive={value === currentPage}
          handleClick={() => setCurrentPage(value)}
          isDisabled={isLoading}
        />
      ))}
      <PageArrow
        type="right"
        isActive={currentPage !== totalPage && !isLoading}
        handleClick={handleButtonNext}
      />
    </div>
  );
}
