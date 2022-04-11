import UserCard from "./Components/UserCard";
import styles from "./Components/UserCard/userCard.module.css";
import { useRef, useState } from "react";
import Header from "./Components/Header"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [inputValue, setInputValue] = useState("");
  const inputTag = useRef();
  const inputHandler = (e) => {
    e.preventDefault();
    const searchValue = inputTag.current.value;
    setInputValue(searchValue);
  };
  
  return (
    <div className="container">
      <div className="row">
          <Header />
          <div className="col-md-6 mx-auto mb-3">
            <form onSubmit={inputHandler} className={styles.inputBox}>
              <input type="search"  placeholder="Enter username" className="form-control" ref={inputTag} />            
            </form>
            <UserCard inputValue={inputValue} />
          </div>
      </div>
    </div>
  );
}

export default App;
