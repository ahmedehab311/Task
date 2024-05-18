import { useState } from "react";
import "./App.css";
import HeaderAndAlert from "./components/header&elert/header";
import Filters from "./components/filters/filters";
import SideMenu from "./components/sideMenu/sideMenu";

function App() {
  const [showFilters, setShowFilters] = useState(false);
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
    
    setIsFiltersVisible(!isFiltersVisible);
  };
  const closeFilters = () => {
    setIsFiltersVisible(false);
  };

  return (
    <div className="App">
    <div>
    <SideMenu/>
      <div className="all">

    <div className="content-all">
    <HeaderAndAlert onButtonClick={toggleFilters} closeFilters={closeFilters} isFiltersVisible={showFilters} toggleFilters={toggleFilters} />
        <Filters  isFiltersVisible={isFiltersVisible}  closeFilters={closeFilters} />
  
    </div>
      </div>
    </div>
    </div>
  );
}

export default App;
