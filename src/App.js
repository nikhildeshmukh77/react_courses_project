import React, { useEffect, useState } from "react";
import { apiUrl,filterData } from "./data";
import Filter from "./components/Filter";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Spinner from "./components/spinner"
import { toast } from "react-toastify";

const App = () => { 

  const [courses, setcourses] = useState(null);
  const [loading,setLoading] = useState(true);
  const [category,setcategory] = useState(filterData[0].title);

  async function fetchdata() {
    setLoading(true);
    try{
      let response = await fetch(apiUrl);
      let output = await response.json();
      /// output ->
      setcourses(output.data);
    }

    catch(error){
      toast.error("An Error occured !!");
    }
    setLoading(false);
  }

  useEffect( () => {
    fetchdata();
  },[])

  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">
      <div>
      <Navbar/>
      </div>

      <div className="bg-bgDark2">
      <div>
      <Filter filterData={filterData}
      category={category}
      setcategory={setcategory}/>
      </div>

      <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center
      items-centre min-h-[50vh] ">
        {
          loading ? (<Spinner/>) : (<Cards courses={courses} category={category}/>)
        }
      </div>
      </div>

     

    </div>
  );
};

export default App;
