
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
import header from "../src/components/header";
import Table from "../src/components/table";
import Footer from "../src/components/footer";

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
