import React from 'react';
import  { useState,useEffect } from "react";
import { useSelector,useDispatch } from 'react-redux'
import { fetchBlogs } from './Action/UserAction';
import { Bloglistdetail } from './bloglistdetail';
import './bottomPagination.css';
import Pagination from './pagination';



export function Bloglist(){
    const[showperpage,setShowperpage] = useState(4);
    const [pagination,setPagination]=useState({
        start : 0,
        end: showperpage
    })
    console.log("blogggggggggg");
    const dispatch = useDispatch();

    const blogs = useSelector(state => state.BlogReducer.blogs);
    useEffect(() => {
        console.log("++++++++");
        dispatch(fetchBlogs())
    },[])
    function pagechange(start,end){
        setPagination({start:start,end:end})
    }
    
    
    console.log("User isssssssssss:",blogs)
    return (
        
        <div>
            
            {
                blogs.length > 0 && <div>
                    <div className='bottomPagination'>
                        {blogs.slice(pagination.start,pagination.end).map(p => <Bloglistdetail key={p.id} blog={p} />)}

                    </div>
                    <div>{<Pagination  showperpage={showperpage}  pagechange={pagechange} total={blogs.length}/>}</div>
                </div>
            }
        </div>
        
    )
}