import React from "react";
import {FcLike,FcLikePlaceholder} from "react-icons/fc";
import { toast } from "react-toastify";

const Card = (props) => {
   let course = props.course; 
   let linkedcourses = props.linkedcourses;
   let setLinkedCOurses = props.setLinkedCOurses;
   function clickHandler () {
       if(linkedcourses.includes(course.id)){
        // Course if already liked 
        setLinkedCOurses( (prev) => prev.filter((cid) => (cid !== course.id)));
        toast.warning("Like Removed !!");
       }
       else {
        // If the course is not liked previously
        if(linkedcourses.length === 0){
            setLinkedCOurses([course.id]);
        }
        else{
            //Liked list is non-empty
            setLinkedCOurses((prev) => [...prev, course.id]);
        }
        toast.success("Linked Successfully !!")
       }
   }

   return(
    <div className="w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden">
        <div className="relative">
            <img src={course.image.url}></img>
            <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-3
            grid place-items-center">
                <button onClick={clickHandler}>
                    {
                        !linkedcourses.includes(course.id) ?
                        (<FcLikePlaceholder fontSize="1.75rem"/>) :
                         (<FcLike fontSize="1.75rem"/>)
                    }
                </button>
            </div> 
        </div>
            
        
        <div className="p-4">
            <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
            <p className="mt-2 text-white">
                {
                    course.description.length >100 ?
                    (course.description.substr(0,100)) + "...":
                    (course.description)
                }
            </p>
        </div>
    </div>
   )
}

export default Card;