import Nav from "../components/page"
export default async function Tools(){
    await new Promise((res)=>{
        setTimeout(res,5000)
    })

    return(
        <div className="bg-[url('https://img.freepik.com/free-photo/robotic-human-heart-futuristic-representation_23-2151681136.jpg?ga=GA1.1.187489777.1728997407&semt=ais_hybrid')] bg-cover h-screen">
        <Nav/>
        <p className="text-center text-xl text-white mt-32">AI tools are software and platforms that help developers create, test, and deploy artificial intelligence solutions. Popular tools include TensorFlow and PyTorch for building machine learning models, YOLO and OpenCV for real-time object detection and image processing, and GPT-4 for generating human-like text. Hugging Face provides pre-trained models for language tasks, while Jupyter Notebooks offers an interactive environment for coding and testing AI projects. Tools like GitHub Copilot assist with code suggestions, and platforms such as Google Cloud AI and Tableau help integrate AI into apps and visualize data effectively. These tools make AI development more accessible and efficient across industries.</p>
    </div>
    )
}