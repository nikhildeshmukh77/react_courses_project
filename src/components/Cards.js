import React, { useState } from "react";
import Card from "./Card";

const Cards = (props) => {
   let courses = props.courses;
   let category = props.category;

   const [linkedcourses,setLinkedCOurses] = useState([]);

   function getCourses() {
      if(category === "All") {
        let allCourses = [];
        Object.values(courses).forEach( array => {
            array.forEach( courseData => {
                allCourses.push(courseData);
            })
        })  
        return allCourses;
      }
      else{
        // To pass specific category's data
        return courses[category]; 
      }
   }
    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {
                getCourses().map( (course) => (
                    <Card key={course.id} course={course}
                     linkedcourses={linkedcourses}
                     setLinkedCOurses={setLinkedCOurses}/>
                ))
            }
        </div>
    )
}

export default Cards;