import Nav from "../components/page"
export default function Robot(){
    return(
        <div className="bg-[url('https://img.freepik.com/premium-photo/blue-background-with-blue-white-light_994023-92169.jpg?ga=GA1.1.187489777.1728997407&semt=ais_hybrid')] bg-cover h-screen">
        <Nav/>

        <div className="flex justify-around mt-40">
            <div className="h-40 w-48 border-4 border-black border-solid bg-[url('https://img.freepik.com/free-photo/futuristic-scene-with-high-tech-robot-used-construction-industry_23-2151329542.jpg?ga=GA1.1.187489777.1728997407&semt=ais_hybrid')] bg-cover"></div>
            <div className="h-40 w-48 border-4 border-black border-solid bg-[url('https://img.freepik.com/premium-photo/advanced-technology-powering-modern-cybernetics_483861-82757.jpg?ga=GA1.1.187489777.1728997407&semt=ais_hybrid')] bg-cover"></div>
            <div className="h-40 w-48 border-4 border-black border-solid bg-[url('https://img.freepik.com/free-photo/robot-performing-ordinary-human-job_23-2151008303.jpg?ga=GA1.1.187489777.1728997407&semt=ais_hybrid')] bg-cover"></div>
            <div className="h-40 w-48 border-4 border-black border-solid bg-[url('https://img.freepik.com/free-photo/3d-rendering-biorobots-concept_23-2149524390.jpg?ga=GA1.1.187489777.1728997407&semt=ais_hybrid')] bg-cover"></div>
        </div>
    </div>
    )
}