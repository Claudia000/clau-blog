import React from 'react';
import{Link} from 'react-router-dom';
// import axios from 'axios';
import '../styles/Home.css'
function Home(){

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
            

            <img src= "https://images.unsplash.com/photo-1542627501-51dde88c1bdc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1468&q=80" alt=""/>
            <h1>Definition</h1>
            <p>Food is any substance consumed to provide nutritional support for an organism. Food is usually of plant, animal or fungal in origin, and contains essential nutrients, such as carbohydrates, fats, proteins, vitamins, or minerals. The substance is ingested by an organism and assimilated by the organism's cells to provide energy, maintain life, or stimulate growth. Different species of animals have different feeding behaviours that satisfy the needs of their unique metabolisms, often evolved to fill a specific ecological niche within specific geographical contexts.</p>
            <h1>What are the types of food?</h1>

<h3>1.Vegetables</h3>
            <img src= "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt=""/>
            <h3>2.Protein</h3>
            <img src= "https://images.unsplash.com/photo-1532550907401-a500c9a57435?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt=""/>
            <h3>3.Dairy</h3>
            <img src= "https://images.unsplash.com/photo-1506617420156-8e4536971650?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=968&q=80" alt=""/>
            
            </div>
    )
                }
export default Home;
    

   