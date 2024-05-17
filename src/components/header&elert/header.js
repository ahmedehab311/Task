import React ,{useState} from 'react'
import icon from "../../images/icon.svg";
import search from "../../images/search.svg";
import photo1 from "../../images/a.svg";
import photo2 from "../../images/b.svg";
import photo3 from "../../images/c.svg";
import photo4H from "../../images/high d.svg";
import photo5D from "../../images/low d.svg";
import "./header.css"
import { AsyncPaginate } from 'react-select-async-paginate'
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion';
function Header({onButtonClick, isFiltersVisible }){
 
    const [selectedFilters, setSelectedFilters] = useState([]);
 
  
    //function section search 
    const items = [
      { id: 1, name: 'TSLA', value: '200' },
      { id: 2, name: 'ABQQ', value: '300' },
      { id: 3, name: 'MSFT', value: '400' },
      { id: 4, name: 'PYPL', value: '500' },
    ];
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleSearch = (event) => {
      setSearchTerm(event.target.value);
    };
  
    const filteredItems = items.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
  
    // data of selection
    const data = [
      {
        id: "1",
        value: "test1"
      },
      {
        id: "2",
        value: "test2"
      },
      {
        id: "3",
        value: "test3"
      },
      {
        id: "4",
        value: "test4"
      },
      {
        id: "5",
        value: "test5"
      }
    ];
    const [openSection, setOpenSection] = useState(null); // قيمة افتراضية تشير إلى عدم اختيار أي عنصر بعد

    const toggleAccordion = (id) => {
      setOpenSection(openSection === id ? 1 : id); // عندما يكون openSection === id، قم بتغيير قيمة openSection إلى -1 لإغلاق القسم
    };
    const [selectedUL, setSelectedUL] = useState(-1);
    const handleULClick = (index) => {
      setSelectedUL(selectedUL === index ? 1 : index);
  };
  
  return (
    <div className="two-sections">
    <header className="container">
      <h2>ALERTS</h2>
    
      <div className="search-section " >
         
    
        <div className="search">

          <img src={search} alt="" className="search-icon" />
          <input type="text" placeholder="Search By..."  className='input-search ' value={searchTerm} onChange={handleSearch}/>
        </div>
        <img src={icon} alt="" className="icon-search" />
        <button className="filters-button" onClick={onButtonClick}>
        Toggle Filters
      </button>
     
      </div>
     
    </header>
    
    <div className="alert-content">
    {filteredItems.map((item) => (

 <ul className="content" key={item.id}>
      <li>
        <img src={photo1} alt="#" className="icon" />
        <h2>{item.name}</h2>
      </li>
      <li>
        <img src={photo2} alt="#" className="icon" />
        <h3>{item.value}</h3>
      </li>
      <li>
        <img src={photo3} alt="#" className="icon" />
        <h3 className="red"> -.25%</h3>
      </li>
      <li>
        <img src={photo4H} alt="#" className="icon" />
        <h3>low Risk</h3>
      </li>
    </ul>
  ))}
    {filteredItems.map((item) => (

 <ul className="content" key={item.id}>
      <li>
        <img src={photo1} alt="#" className="icon" />
        <h2>{item.name}</h2>
      </li>
      <li>
        <img src={photo2} alt="#" className="icon" />
        <h3>{item.value}</h3>
      </li>
      <li>
        <img src={photo3} alt="#" className="icon" />
        <h3 className="green"> -.25%</h3>
      </li>
      <li>
        <img src={photo4H} alt="#" className="icon" />
        <h3>low Risk</h3>
      </li>
    </ul>
  ))}
    {filteredItems.map((item) => (

 <ul className="content" key={item.id}>
      <li>
        <img src={photo1} alt="#" className="icon" />
        <h2>{item.name}</h2>
      </li>
      <li>
        <img src={photo2} alt="#" className="icon" />
        <h3>{item.value}</h3>
      </li>
      <li>
        <img src={photo3} alt="#" className="icon" />
        <h3 className="red"> -.25%</h3>
      </li>
      <li>
        <img src={photo4H} alt="#" className="icon" />
        <h3>High Risk</h3>
      </li>
    </ul>
  ))}
    {filteredItems.map((item) => (

 <ul className="content" key={item.id}>
      <li>
        <img src={photo1} alt="#" className="icon" />
        <h2>{item.name}</h2>
      </li>
      <li>
        <img src={photo2} alt="#" className="icon" />
        <h3>{item.value}</h3>
      </li>
      <li>
        <img src={photo3} alt="#" className="icon" />
        <h3 className="red"> -.25%</h3>
      </li>
      <li>
        <img src={photo4H} alt="#" className="icon" />
        <h3>low Risk</h3>
      </li>
    </ul>
  ))}
    {filteredItems.map((item) => (

 <ul className="content" key={item.id}>
      <li>
        <img src={photo1} alt="#" className="icon" />
        <h2>{item.name}</h2>
      </li>
      <li>
        <img src={photo2} alt="#" className="icon" />
        <h3>{item.value}</h3>
      </li>
      <li>
        <img src={photo3} alt="#" className="icon" />
        <h3 className="red"> -.25%</h3>
      </li>
      <li>
        <img src={photo4H} alt="#" className="icon" />
        <h3>low Risk</h3>
      </li>
    </ul>
  ))}
    
    </div>

  
  </div>
  )
}

export default Header