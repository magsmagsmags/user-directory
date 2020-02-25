
////////////////////////////////
// react dependency
////////////////////////////////
import React from 'react';

////////////////////////////////
// import css styling
////////////////////////////////
import './App.css';

////////////////////////////////
// import components from src > components> 
////////////////////////////////
import Header from "../src/components/Header";
import Table from "../src/components/Table";
import Footer from "../src/components/Footer";

////////////////////////////////
// App function (return div "app" with: Header, Table, Footer)
////////////////////////////////
function App() {
  return (
    <div className="App">
      <Header />
      <Table />
      <Footer />
    </div>
  );
}

////////////////////////////////
// export App function
////////////////////////////////
export default App;
