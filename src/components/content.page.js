import React from "react";
import parse from "html-react-parser"; // Import the HTML parser library
import formatDate from "@/lib/formatDate";
import { User } from "@nextui-org/react";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";

// import getContent from "@/lib/getContent";

export default async function ContentSection({ post }) {
  const {
    updated,
    title,
    content,
    author: {
      displayName,
      image: { url },
    },
    labels,
  } = post;

  const date = formatDate(updated);

  return (
    <div className=" w-full max-w-[680px]">

      

      {/* Title of the content */}
      <div className=" w-full bg-purple-300 px-4 py-10">


        <h1>{title}</h1>

        <div className=" flex gap-4 items-center ">
          <User
            name={displayName}
            avatarProps={{
              src: "/profile.gif",
            }}
          />

          <div className=" text-sm text-gray-800">{date}</div>
        </div>
      </div>

      {/* Body of the content */}
      <div className=" w-full px-4">
        <div className="w-full">{parse(content)}</div>
      </div>
    </div>
  );
}
