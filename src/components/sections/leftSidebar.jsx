import TableOfContent from "../tableofcontent";

export default function ({headings}){
    return (
       <div className=" w-80">

        <TableOfContent headings={headings} />

       </div>
    )
}