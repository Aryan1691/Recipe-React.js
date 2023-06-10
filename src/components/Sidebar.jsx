import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

export const Sidebar = ({link,close,links}) => {
  const location = useLocation();
  return (
   <React.Fragment>
    <div className="sidebar" onClick={close}  >
 
     {link.map((links,index)=>{
        return <Link onClick={close} to={links.path}  key={index}
         className={location.pathname === links.path ? 'sidebar-link active':'sidebar-link' } href="#!" 
        >{links.icon}   {links.name}</Link>
     })}
     {links.map((link,index)=>{
      return <HashLink key={index} className={location.pathname===link.path?"sidebar-link active":"sidebar-link"} to={link.path}>{link.icon}{link.name}</HashLink>
     })}
    </div>
   </React.Fragment>
  )
}
