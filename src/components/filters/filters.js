import React, { useState } from "react";
import X from "../../images/X.svg";
import "./filters.css";
import health from "../../images/health.svg";
import Communication from "../../images/consumer.svg";
import consumer from "../../images/consumer2.svg";
import financials from "../../images/financials.svg";
import Matrials from "../../images/matr.svg";
import Utilities from "../../images/uni.svg";
import it from "../../images/it.svg";
import itind from "../../images/itind.svg";
import energy from "../../images/energy.svg";
import indus from "../../images/indus.svg";
import real from "../../images/real.svg";
import search from "../../images/search.svg";



function Filters({ isFiltersVisible, addClass , closeFilters }) {
  const [selectedFilters, setSelectedFilters] = useState([]);

  //function section Industry
  const handleItemClick = (itemName) => {
    if (!selectedFilters.includes(itemName)) {
      setSelectedFilters([...selectedFilters, itemName]);
    }
  };

  const removeFilter = (itemName) => {
    setSelectedFilters(selectedFilters.filter((item) => item !== itemName));
  };

  // function section radio
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedFiltersOptions, setSelectedFiltersOptions] = useState([]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setSelectedFiltersOptions([event.target.value]);
  };

  const [selectedOptionRisk, setSelectedOptionRisk] = useState("");
  const [selectedFiltersOptionsRisk, setSelectedFiltersOptionsRisk] = useState(
    []
  );
  const handleOptionChangeRisk = (event) => {
    setSelectedOptionRisk(event.target.value);
    setSelectedFiltersOptionsRisk([event.target.value]);
  };

  // clear data
  const clearAllFilters = () => {
    setSelectedOption("");
    setSelectedOptionRisk("");
    setSelectedFilters([]);
  };

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
  ];

  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (itemName, index) => {
    if (!selectedFilters.includes(itemName)) {
      setSelectedFilters([itemName]);
    }
    setActiveButton(index);
  };
  return (
    <div className={`filters ${isFiltersVisible ? "open" : ""} ${addClass}`}>
      <div className="filter">
        <h3>Filters</h3>
        <img src={X} alt="Close" className="close" onClick={closeFilters} />
        <div className="applies">
          <div className="top">
            <h4>Filters Applies</h4>
            <h5 className="clear" onClick={clearAllFilters}>
              Clear All
            </h5>
          </div>
          <ul className="filters-applied">
            {selectedFilters.map((filter, index) => (
              <>
                <li key={index}>
                  {filter}
                  <img
                    src={X}
                    className="x"
                    alt="Remove"
                    onClick={() => removeFilter(filter)}
                  />
                </li>
              </>
            ))}

            <ul style={{ display: "flex" }}>
              {selectedOption && (
                <li>
                  {selectedOption}
                  <img
                    src={X}
                    className="x"
                    alt="Remove"
                    onClick={() => setSelectedOption("")}
                  />
                </li>
              )}
              {selectedOptionRisk && (
                <li>
                  {selectedOptionRisk}
                  <img
                    src={X}
                    className="x"
                    alt="Remove"
                    onClick={() => setSelectedOptionRisk("")}
                  />
                </li>
              )}
              
            </ul>
           
          </ul>
        </div>

        <div className="stock">
          <div className="ground">
            <h3 title-filter>Stock</h3>
            <div className="input-stock">
              <input type="text" placeholder="$ TICHER" />
              <img src={search} alt="" />
            </div>
            <div className="industry">
              <div>
                <h4 className="title-filter">Industry</h4>
              </div>
              <ul className="industry-content">
                <li
                  className="filters-done"
                  onClick={() => handleItemClick("Communication")}
                >
                  <div className="info-industry">
                    <img src={Communication} alt="" />
                    <p>Communication</p>
                  </div>
                </li>

                <li
                  className="filters-done"
                  onClick={() => handleItemClick("Consumer")}
                >
                  <div className="info-industry">
                    <img src={consumer} alt="" />
                    <p>Consumer</p>
                  </div>
                </li>
                <li
                  className="filters-done"
                  onClick={() => handleItemClick("financials")}
                >
                  <div className="info-industry">
                    <img src={financials} alt="" />
                    <p>financials</p>
                  </div>
                </li>
                <li
                  className="filters-done"
                  onClick={() => handleItemClick("Matrials")}
                >
                  <div className="info-industry">
                    <img src={Matrials} alt="" />
                    <p>Matrials</p>
                  </div>
                </li>
                <li
                  className="filters-done"
                  onClick={() => handleItemClick("Utilities")}
                >
                  <div className="info-industry">
                    <img src={Utilities} alt="" />
                    <p>Utilities</p>
                  </div>
                </li>
                <li
                  className="filters-done"
                  onClick={() => handleItemClick("It")}
                >
                  <div className="info-industry">
                    <img src={it} alt="" />
                    <p>It</p>
                  </div>
                </li>
                <li
                  className="filters-done"
                  onClick={() => handleItemClick("Discretionary")}
                >
                  <div className="info-industry">
                    <img src={itind} alt="" />
                    <p>Discretionary</p>
                  </div>
                </li>
                <li
                  className="filters-done"
                  onClick={() => handleItemClick("Energy")}
                >
                  <div className="info-industry">
                    <img src={energy} alt="" />
                    <p>Energy</p>
                  </div>
                </li>
                <li
                  className="filters-done"
                  onClick={() => handleItemClick("Industrials")}
                >
                  <div className="info-industry">
                    <img src={indus} alt="" />
                    <p>Industrials</p>
                  </div>
                </li>
                <li
                  className="filters-done"
                  onClick={() => handleItemClick("Real Estate")}
                >
                  <div className="info-industry">
                    <img src={real} alt="" />
                    <p className="">Real Estate</p>
                  </div>
                </li>
                <li
                  className="filters-done last"
                  onClick={() => handleItemClick("Real Estate")}
                >
                  <div className="info-industry">
                    <img src={real} alt="" />
                    <p className="">Real Estate</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="radio">
              <div className="left">
                <h4 className="title-filter">Market Cap</h4>
                <ul className="content-radio">
                  <li>
                    <input
                      type="radio"
                      name="MarketCap"
                      value="Micro"
                      onChange={handleOptionChange}
                      checked={selectedOption === "Micro"}
                    />
                    <label htmlFor="">Micro</label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      name="MarketCap"
                      value="Small"
                      onChange={handleOptionChange}
                    />
                    <label htmlFor="">Small</label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      name="MarketCap"
                      value="Large"
                      onChange={handleOptionChange}
                    />
                    <label htmlFor="">Large</label>
                  </li>
                </ul>
              </div>
              <div className="right">
                <h4 className="title-filter"> Risk Level</h4>
                <ul className="content-radio">
                  <li>
                    <input
                      type="radio"
                      name="RiskLevel"
                      value="Low Risk"
                      onChange={handleOptionChangeRisk}
                    />
                    <label htmlFor="">Low Risk</label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      name="RiskLevel"
                      value="Mid Risk"
                      onChange={handleOptionChangeRisk}
                    />
                    <label htmlFor="">Mid Risk</label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      name="RiskLevel"
                      value="High Risk"
                      onChange={handleOptionChangeRisk}
                    />
                    <label htmlFor="">High Risk</label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="selection">
          <div className="left-selection">
        <h4 className="title-filter-select">Strategy</h4>
        <ul className="list-selection">
            <li
              className={activeButton === 1 ? 'active' : ''}
              onClick={() => handleClick("Big Option Buys", 1)}
            >
              Big Option Buys
            </li>
            <li
              className={activeButton === 2 ? 'active' : ''}
              onClick={() => handleClick("Merger Arbitrage", 2)}
            >
              Merger Arbitrage
            </li>
            <li
              className={activeButton === 3 ? 'active' : ''}
              onClick={() => handleClick("Short Reports", 3)}
            >
              Short Reports
            </li>
          </ul>
        </div>
        <div className="right-selection">
          <h4 className="title-filter-select">Asset</h4>
          <ul className="list-selection">
            <li
              className={activeButton === 4 ? 'active' : ''}
              onClick={() => handleClick("Stock", 4)}
            >
              Stock
            </li>
            <li
              className={activeButton === 5 ? 'active' : ''}
              onClick={() => handleClick("Options", 5)}
            >
              Options
            </li>
            <li
              className={activeButton === 6 ? 'active' : ''}
              onClick={() => handleClick("Future", 6)}
            >
              Future
            </li>
          </ul>
      </div>
          </div>
        </div>

        <div className="btns">
          <button></button>
          <button></button>
        </div>
      </div>
    </div>
  );
}

export default Filters;
