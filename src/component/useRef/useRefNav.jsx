// import React from 'react'
// import './Nav.css'
// import {AiFillHome} from 'react-icons/ai'
// import {FaUserCircle} from 'react-icons/fa'
// import {BiMessageRoundedDots} from 'react-icons/bi'
// import {BsBookmarkStar} from 'react-icons/bs'
// import {RiServiceLine} from 'react-icons/ri'
// import { useState } from 'react'

// const Nav = () => {
//   const [activeNav, setActiveNav] = useState('#');

//   // const hr = document.getElementsByTagName('a');
//   // console.log(hr);

//   const toggleActiveNav = (event) => {
//     // console.log(event);
//     setActiveNav(event.target.hash) 
//   }
  
  
//   return (
//     // <nav>
//     //   <a 
//     //     href="#" 
//     //     onClick={() => setActiveNav('#')} 
//     //     className={activeNav === '#' ? 'active' : ''}
//     //   >
//     //       <AiFillHome/> 
//     //   </a>
//     //   <a 
//     //     href="#about"
//     //     onClick={() => setActiveNav('#about')}
//     //     className={activeNav === '#about' ? 'active' : ''}   
//     //   >
//     //       <FaUserCircle/>
//     //   </a>

//     //   <a 
//     //     href="#experience"
//     //     onClick={() => setActiveNav('#experience')}
//     //     className={activeNav === '#experience' ? 'active' : ''}
//     //   >
//     //     <BsBookmarkStar/>
//     //   </a>
    
//     //   <a 
//     //     href="#services"
//     //     onClick={() => setActiveNav('#services')}
//     //     className={activeNav === '#services' ? 'active' : ''}
//     //   >
//     //     <RiServiceLine/>
//     //   </a>
      
//     //   <a 
//     //     href="#contact"
//     //     onClick={() => setActiveNav('#contact')}
//     //     className={activeNav === '#contact' ? 'active' : ''}
//     //   >
//     //     <BiMessageRoundedDots/>
//     //   </a>
//     // </nav>
    
    
    
    
//     <nav>
      
//       <a 
//         href="#" 
//         onClick={toggleActiveNav} 
//         className={activeNav === '#' ? 'active' : ''}
//       >
//           <AiFillHome/> 
//       </a>
//       <a 
//         href="#about"
//         onClick={toggleActiveNav}
//         className={activeNav === '#about' ? 'active' : ''}   
//       >
//           <FaUserCircle/>
//       </a>

//       <a 
//         href="#experience"
//         onClick={toggleActiveNav}
//         className={activeNav === '#experience' ? 'active' : ''}
//       >
//         <BsBookmarkStar/>
//       </a>
    
//       <a 
//         href="#services"
//         onClick={toggleActiveNav}
//         className={activeNav === '#services' ? 'active' : ''}
//       >
//         <RiServiceLine/>
//       </a>
      
//       <a 
//         href="#contact"
//         onClick={toggleActiveNav}
//         className={activeNav === '#contact' ? 'active' : ''}
//       >
//         <BiMessageRoundedDots/>
//       </a>

//     </nav>
//   )
// }

// export default Nav