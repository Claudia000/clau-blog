// import React from 'react'

// function AddPost (props) {

//     return(
//         <h1>My AddPost</h1>
//     )
// }

// export default AddPost; 


import React from 'react';
import{Link} from 'react-router-dom';
// import axios from 'axios';
import '../styles/Home.css'
function Addpost(){

const navLinks = [
 {   
    title: 'Home',
    path: '/'
},

{
    title: 'AddPost',
    path:'/add-post'
    
},

{
    title:'Login',
    path:'/login'
}

]

return (
        <div>
            <nav className="site">
                <span> Food Blog </span>
                

                <ul> 
                    { navLinks.map((link, index) => (

                        <li key={index}>
                            <Link to={link.path}>{link.title}</Link>
                        </li>
                    ))
                    }

                </ul>

            </nav> 
            <h1>Diet</h1>
            <p>In nutrition, diet is the sum of food consumed by a person or other organism. The word diet often implies the use of specific intake of nutrition for health or weight-management reasons (with the two often being related). Although humans are omnivores, each culture and each person holds some food preferences or some food taboos. This may be due to personal tastes or ethical reasons. Individual dietary choices may be more or less healthy.

            </p>
            <img src= "https://images.unsplash.com/photo-1505714197102-6ae95091ed70?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt=""/>
           
<h1>What are the reasons for eating diet food?</h1>
<p>Eating a healthy diet that includes lots of fruit, vegetables, whole grains and a moderate amount of unsaturated fats, meat and dairy can help you maintain a steady weight. Having a good variety of these foods every day leaves less room for foods that are high in fat and sugar - a leading cause of weight gain.</p>

             
             </div>
    )
                }
export default Addpost;
    

   