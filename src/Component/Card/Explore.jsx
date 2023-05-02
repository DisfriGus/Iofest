import React from 'react';
import { Link } from 'react-router-dom';

const Explore = props => {
    const {title, to, description,  className} = props;
    return(
     <Link to={to} className={`${className} flex flex-col flex-1 group hover:cursor-pointer max-sm:items-center`}>
        <img className='w-full h-[240px] rounded-md bg-red-300 mb-4 object-cover' src='https://images.unsplash.com/photo-1682270251135-b917816669e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60' />
        <h3 className='heading4 group-hover:text-[#2257DF] mb-2 max-sm:title3'>{title}</h3>
        <p className='max-sm:text-center'>{description}</p>
     </Link>   
    );
}

export default Explore;