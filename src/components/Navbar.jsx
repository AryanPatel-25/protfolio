import { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../context/ThemeContext";
import "./Navbar.css";


function Navbar(){

const {setIsLoggedIn}=useContext(AuthContext);

const location = useLocation();

const [indicatorStyle,setIndicatorStyle]=useState({});


const refs = useRef({});


const menuItems=[

{
name:"Home",
path:"/"
},

{
name:"About",
path:"/about"
},

{
name:"Skills",
path:"/skills"
},

{
name:"Projects",
path:"/projects"
},

{
name:"Contact",
path:"/contact"
}

];



useEffect(()=>{

const activeItem = 
refs.current[location.pathname];


if(activeItem){

setIndicatorStyle({

width:activeItem.offsetWidth,

left:activeItem.offsetLeft

});

}


},[location.pathname]);




return(


<nav className="navbar">


<h2 className="logo">
Aryan Portfolio
</h2>



<div className="nav-links">


<div 
className="indicator"
style={indicatorStyle}
>
</div>



{
menuItems.map((item)=>(


<Link

key={item.path}

to={item.path}

ref={(el)=>
refs.current[item.path]=el
}

className="nav-item"

>


{item.name}


</Link>


))

}




<button

className="logout-btn"

onClick={()=>setIsLoggedIn(false)}

>

Logout

</button>



</div>


</nav>


)

}


export default Navbar;