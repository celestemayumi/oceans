import ProjectOne from "./ProjectOne"
import ProjectTwo from "./ProjectTwo"

const OurProjects = ()=> {
    return(
        <section className="px-20 bg-[#f3f3f3] flex flex-col items-center">
        <h1 className="text-[#013E78] text-5xl font-bold mb-10">O PROJETO</h1>
        <ProjectOne/>
        <br></br>
        <ProjectTwo/>
        <br></br>
        </section>
    )
}

export default OurProjects