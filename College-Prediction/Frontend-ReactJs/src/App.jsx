import Navbar from "./Component/Navbar/navbar";
import CollegeList from "./Component/CollegeList/collegeList";
import Home from "./Component/Home/home";

function App() {

  return (
    <>
      <Navbar/>
      
      <div className="container flex-auto text-center m-5 " >
        {/* <h1 className="font-bold text-3xl">College Predition</h1> */}
        <CollegeList/>
        <Home/>
      </div>
      
    </>
  )
}

export default App
