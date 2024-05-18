import React, { useState } from "react";
import icon from "../../images/icon.svg";
import search from "../../images/search.svg";
import search1 from "../../images/Search1.svg";
import photo1 from "../../images/a.svg";
import photo2 from "../../images/b.svg";
import photo3 from "../../images/c.svg";
import photo4H from "../../images/high d.svg";
import photo5D from "../../images/low d.svg";
import "./header.css";
import { AsyncPaginate } from "react-select-async-paginate";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
function Header({ onButtonClick, isFiltersVisible }) {
  const [selectedFilters, setSelectedFilters] = useState([]);

  //function section search
  const items = [
    { id: 1, name: "TSLA", value: "200" },
    { id: 2, name: "ABQQ", value: "300" },
    { id: 3, name: "MSFT", value: "400" },
    { id: 4, name: "PYPL", value: "500" },
  ];
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // data of selection
  const data = [
    {
      id: "1",
      value: "test1",
    },
    {
      id: "2",
      value: "test2",
    },
    {
      id: "3",
      value: "test3",
    },
    {
      id: "4",
      value: "test4",
    },
    {
      id: "5",
      value: "test5",
    },
  ];
  const [openSection, setOpenSection] = useState(null);
  const toggleAccordion = (id) => {
    setOpenSection(openSection === id ? 1 : id); 
  };
  const [selectedUL, setSelectedUL] = useState(-1);
  const handleULClick = (index) => {
    setSelectedUL(selectedUL === index ? 1 : index);
  };
// info ul show 
const [showInfoAlert, setShowInfoAlert] = useState(false);
const [selectedItem, setSelectedItem] = useState(null);

const handleClick = (item) => {
  setSelectedItem(item);
};
  return (
    <div className="two-sections">
      <header className="container">
        <div className="search-section ">
          <h2>ALERTS</h2>

          <div className="all-search in1">
            <div className="search">
              <img src={search1} alt="" className="search-icon" />
              <div className="search-bar">
                <input
                  type="saarch"
                  placeholder="Search By..."
                  className="input-search "
                  value={searchTerm}
                  onChange={handleSearch}
                />
              </div>
            </div>
            <img src={icon} alt="" className="icon-search" />
            <button className="filters-button" onClick={onButtonClick}>
              Filters
            </button>
          </div>
        </div>
      </header>

      <div className="alert-content">
      <div className="one-alert">
      {filteredItems.map((item) => (
  <div key={item.id}>
    <ul className="content" onClick={() => handleClick(item)}>
      <li>
        <img src={photo1} alt="#" className="icon" />
        <h2>{item.name}</h2>
      </li>
      <li>
        <img src={photo2} alt="#" className="icon" />
        <h2>{item.value}</h2>
      </li>
      <li>
        <img src={photo3} alt="#" className="icon" />
        <h2 className="red">-.25%</h2>
      </li>
      <li>
        <img src={photo4H} alt="#" className="icon" />
        <h2>low Risk</h2>
      </li>
    </ul>
    {/* {selectedItem && selectedItem.id === item.id && (
      <div className={"info-alert"} style={{ display: showInfoAlert ? 'none' : 'block' , display: showInfoAlert ? 'none' : 'block' }}>
        <p>
          $AMZN just announced an acquisition of <span> $NFLX</span> at{" "}
          <span>$200 B</span>.
        </p>
        <p>
          This is an <span>arbitrage opportunity</span>, with the max gain
          being %X if the deal closes, but the possible risk is %Y if the
          deal success is % and therebefore the recommended play{" "}
          <span>long/short</span> $ABC
        </p>
      </div>
    )} */}
    <ul className="content" onClick={() => handleClick(item)}>
      <li>
        <img src={photo1} alt="#" className="icon" />
        <h2>{item.name}</h2>
      </li>
      <li>
        <img src={photo2} alt="#" className="icon" />
        <h2>{item.value}</h2>
      </li>
      <li>
        <img src={photo3} alt="#" className="icon" />
        <h2 className="red">-.25%</h2>
      </li>
      <li>
        <img src={photo4H} alt="#" className="icon" />
        <h2>low Risk</h2>
      </li>
    </ul>
    <ul className="content" onClick={() => handleClick(item)}>
      <li>
        <img src={photo1} alt="#" className="icon" />
        <h2>{item.name}</h2>
      </li>
      <li>
        <img src={photo2} alt="#" className="icon" />
        <h2>{item.value}</h2>
      </li>
      <li>
        <img src={photo3} alt="#" className="icon" />
        <h2 className="red">-.25%</h2>
      </li>
      <li>
        <img src={photo4H} alt="#" className="icon" />
        <h2>low Risk</h2>
      </li>
    </ul>
    
  </div>
))}
      </div>
       
      </div>
    </div>
  );
}

export default Header;
