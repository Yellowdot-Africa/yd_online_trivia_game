import  {useState} from "react";
import "../ContentPage/ContentPage.css";
import Button from "../../Components/Button";
import PieChart from "../../Components/PieChart";
import Table from "../../utils/Table";
import Search  from "../../Assets/Icons/search.svg";

const ContentPage = () => {
  const [searchQueryTerm, setSearchQueryTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const columns = [
    { key: "msidn", header: "MSIDN" },
    { key: "pricepoint", header: "Price point" },
    { key: "category", header: "Category" },
    { key: "winning", header: "Winning" },

  ];



  const tableData = [
    { msidn: '+2348176855712', pricepoint: '200', category: 'Music', winning: "20,000" },
    { msidn: '+2348176855712',pricepoint: '200', category: 'Music', winning: "20,000" },
    { msidn: '+2348176855712', pricepoint: '200', category: 'Music', winning: "20,000" },
    { msidn: '+2348176855712', pricepoint: '200', category: 'Music', winning: "20,000" },
    { msidn: '+2348176855712', pricepoint: '200', category: 'Music', winning: "20,000" },
    { msidn: '+2348176855712', pricepoint: '200', category: 'Music', winning: "20,000" },
    { msidn: '+2348176855712', pricepoint: '200', category: 'Music', winning: "20,000" },

    
  ];
  const filteredTableData = tableData.filter((row) => {
    return Object.values(row).some((value) =>
      value.toString().toLowerCase().includes(searchQueryTerm.toLowerCase())
    );
  });


  return (
    <>
      <div className="container">
        <div className="categories">
          <div className="category-que-box">
            <p className="category-que-text">Categories and Questions</p>
            <div className="inputs-container">
              <select name="" id="">
                <option value="">Categories</option>
                <option value="">History</option>
                <option value="">Music</option>
                <option value="">Categories</option>
                <option value="">Categories</option>
                <option value="">Categories</option>




              </select>
              <div className="input-container"> 
              <input className="input" type="text" placeholder="Search" value={searchQueryTerm}
                  onChange={(e) => setSearchQueryTerm(e.target.value)}/>
              <img className="searc-icon" src={Search} alt="search" />
              </div>
            </div>
            <p>Questions</p>
          </div>

          <Button />
        </div>

        <div className="category-performance">
          <div className="category-box">
            <p className="performanc"> Single Category Performance</p>

            <PieChart />
          </div>
          <div className="winners">
            <div className="winners-details">
              <p className="win">Category Winners</p>
              <p className="date">Date select</p>
            </div>
            <Table data={filteredTableData} columns={columns} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentPage;
