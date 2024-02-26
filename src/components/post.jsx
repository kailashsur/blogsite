"use client"
import React from "react";
import PostCard from "./postCard";
import Link from 'next/link';
import { ChevronRightIcon } from "@heroicons/react/24/outline"


export default function PostSection({ posts }) {

  // Number of posts to display per page
  const postsPerPage = 6;

  // State to keep track of the current page
  const [currentPage, setCurrentPage] = React.useState(1);

  // Calculate the index range of posts to display based on the current page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.length > 0 ? posts.slice(indexOfFirstPost, indexOfLastPost) : null;



  // Function to handle page change
  // Logic to handle pagination
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };


  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="">

        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">

          {
            currentPosts !== null ?
             currentPosts.map((post, i) => {
              let idxSlash = post.url.lastIndexOf("/")
              let htmlIdx = post.url.lastIndexOf(".html");

              let slug = post.url.slice(idxSlash + 1, htmlIdx);

              return (<PostCard post={post} slug={slug} key={i} />)
            })
           
            : (<div className=" text-center"> Post Not Found </div>)
          }

          {/* <!-- More posts... --> */}

          {/* Pagination start */}


          {/* Pagination End */}


        </div>


      </div>
      <div className=" flex items-center justify-center gap-10 mt-12 font-semibold ">
        {/* Previous button */}
        {
          <span className={` cursor-pointer ${currentPage === 1 && 'pointer-events-none'}`} onClick={prevPage}>
            {
              currentPage > 1 ?
                "Previous"
                : ""
            }
          </span>
        }
{/* 
        <span className=" text-center pointer-events-none"> {currentPage} </span> */}

        {
          currentPosts ?
          currentPosts.length < 6 ?
            ""
            : <span className={`cursor-pointer ${indexOfLastPost >= posts.length && 'pointer-events-none'}`} onClick={nextPage}>
              Next
            </span>
          : ""
        }
      </div>
    </div>
  );
}

PostSection.defaultProps = {
  revalidate: 60,
};