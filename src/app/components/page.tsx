import Link from "next/link"
export default function Nav(){
    return(
        <div>
            <div className=" bg-blue-900 h-16 flex justify-between items-center">
                <div className="text-4xl text-white font-extrabold pl-6">AI Company</div>
                <div className="flex text-xl text-white pr-6">
                    <Link className="mr-9" href="/">Home</Link>
                    <Link className="mr-9" href="/about">About US</Link>
                    <Link className="mr-9" href="/robotics">Robotics</Link>
                    <Link className="mr-9" href="/tools">AI Tools</Link>
                    <Link href="/Contact">Contact US</Link>
                </div>
            </div>
        </div>
    )
}