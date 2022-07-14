// import logo from './logo.svg';
import './App.css';
import './style.css'
import ListData from './ListData';
import Products from "./Products";
import UserNameList from './UserNameList';
function App() {
  return (
    <div className="">
      <ListData/>
     <h3>Q2. Make a Products Table which should work as:  1. Fill form and submit values. 2. Product should add in product list and display in list below add product form.</h3>
      <Products/><br/><br/><br/>
      <h3>Q4. Using class components create a username list as shown.</h3>
      <UserNameList/>
    </div>
  );
}

export default App;
