import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart,AiOutlineUserAdd } from "react-icons/ai";
import "./Nav.css";

const Nav = ({ handleInputChange, query ,size,setShow}) => {

  return (
    <nav>
      <div className="box-name"  onClick={()=>setShow(true)}>
        <p>E-commerce .in</p>
      </div>
      <div className="nav-container"  >
        <input
          className="search-input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Enter your search shoes."
        />
      </div>
      <div className="profile-container" onClick={()=>setShow(false)}>
          <AiOutlineShoppingCart className="nav-icons"  />
          <h1 className="size">{size}</h1>
      </div>
    </nav>
  );
};

export default Nav;
