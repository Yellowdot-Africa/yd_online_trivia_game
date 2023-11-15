import { useState } from "react";
import "../UserPage/UserPage.css";
import Filter from "../../Assets/Icons/filter.svg";
import Search from "../../Assets/Icons/search.svg";
import Arrow from "../../Assets/Icons/Arrow 1.svg";
import CategoryIcon from "../../Assets/Icons/dashiconscategory.svg";
import Table from "../../utils/Table";
import Pagination from "../../Components/Pagination";

const UserPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const columns = [
    { key: "msidn", header: "MSIDN" },
    { key: "gamesplayed", header: "Games played" },
    { key: "winning", header: "Winnings" },
  ];

  const tableData = [
    { msidn: "+2348176855712", gamesplayed: "100", winning: "100" },
    { msidn: "+2348176855712", gamesplayed: "5", winning: "5" },
    { msidn: "+2348176855712", gamesplayed: "28", winning: "28" },
    { msidn: "+2348176855712", gamesplayed: "87", winning: "87" },
    { msidn: "+2348176855712", gamesplayed: "98", winning: "98" },
    { msidn: "+2348176855712", gamesplayed: "89", winning: "89" },
    { msidn: "+2348176855712", gamesplayed: "20", winning: "20" },
    { msidn: "+2348176855712", gamesplayed: "77", winning: "77" },
    { msidn: "+2348176855712", gamesplayed: "43", winning: "43" },
    { msidn: "+2348176855712", gamesplayed: "98", winning: "98" },
    { msidn: "+2348176855712", gamesplayed: "1", winning: "1" },
    { msidn: "+2348176855712", gamesplayed: "57", winning: "57" },
    { msidn: "+2348176855712", gamesplayed: "1", winning: "1" },
    { msidn: "+2348176855712", gamesplayed: "87", winning: "87" },
  ];

  const tableDat = [
    { msidn: "+2348176855712", gamesplayed: "100", winning: "100" },
    { msidn: "+2348176855712", gamesplayed: "5", winning: "5" },
    { msidn: "+2348176855712", gamesplayed: "28", winning: "28" },
    { msidn: "+2348176855712", gamesplayed: "100", winning: "100" },
    { msidn: "+2348176855712", gamesplayed: "5", winning: "5" },
    { msidn: "+2348176855712", gamesplayed: "28", winning: "28" },
  ];
  const filteredTableDat = tableDat.filter((row) => {
    return Object.values(row).some((value) =>
      value.toString().toLowerCase().includes(searchQuery.toLowerCase())
    );
  });
  const filteredTableData = tableData.filter((row) => {
    return Object.values(row).some((value) =>
      value.toString().toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const itemsPerPage = "X/100";

  const totalPages = Math.ceil(tableData.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(0);
  const handlePageClick = (selected) => {
    setCurrentPage(selected);
  };
  return (
    <>
      <div className="container">
        <div className="user-search">
          <div className="all-user-box">
            <div className="user-cont">
              <p className="user">All users</p>
              <button className="filter-button">
                Filter
                <img src={Filter} alt="" />
              </button>
            </div>
            <Table data={filteredTableData} columns={columns} />

            <Pagination
              pageCount={totalPages}
              handlePageClick={handlePageClick}
            />
          </div>
          <div className="cate">
            <div className="search-box ">
              <div className="input-container">
                <input
                  type="text"
                  placeholder="Search users"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <img src={Search} alt="search-icon" className="search-icon" />
              </div>
            </div>

            <div className="players">
              <div className="top-date">
                <p className="top">Top players</p>
                <p className="date">Date select</p>
              </div>
              <Table data={filteredTableDat} columns={columns} />
            </div>
          </div>
        </div>
        <button className="transactn-btn">
          <div className="icon">
            <img src={CategoryIcon} alt="cat-icon" />
          </div>
          <p>All Transactions</p>
          <img src={Arrow} alt="arrow" />
        </button>
      </div>
    </>
  );
};

export default UserPage;
