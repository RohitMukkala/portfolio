import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/viberr.png";
import freshBurger from "../../assets/fresh-burger.png";
import hipsster from "../../assets/hipsster.png";
import fitLift from "../../assets/fitlift.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Pestopia"
          p="Plant Disease Detection"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Grapher"
          p="Story to KG"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/RohitMukkala/codingJourney"
          h3="SmartCoder"
          p="Personal AI Assistant"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/RohitMukkala/jarvis"
          h3="Jarvis"
          p="Desktop AI Assistant"
        />
      </div>
    </section>
  );
}

export default Projects;
