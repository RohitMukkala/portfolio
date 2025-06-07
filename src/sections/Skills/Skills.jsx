import styles from "./SkillsStyles.module.css";
import checkMarkIconDark from "../../assets/checkmark-dark.svg";
import checkMarkIconLight from "../../assets/checkmark-light.svg";
import SkillList from "../../common/SkillList";
import { useTheme } from "../../common/ThemeContext";

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon =
    theme === "light" ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>

      {/* Core AI & Machine Learning Skills */}
      <h2 className={styles.sectionSubtitle}>AI & Machine Learning</h2>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Python" />
        <SkillList src={checkMarkIcon} skill="TensorFlow" />
        <SkillList src={checkMarkIcon} skill="Keras" />
        <SkillList src={checkMarkIcon} skill="NLTK" />
        <SkillList src={checkMarkIcon} skill="OpenCV" />
        <SkillList src={checkMarkIcon} skill="Deep Learning" />
        <SkillList src={checkMarkIcon} skill="Scikit-learn" />
      </div>

      <hr />

      {/* Big Data & Deployment */}
      <h2 className={styles.sectionSubtitle}>Big Data & Deployment</h2>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Uvicorn" />
        <SkillList src={checkMarkIcon} skill="CORS" />
        <SkillList src={checkMarkIcon} skill=" RESTful APIs" />
        <SkillList src={checkMarkIcon} skill="Render" />
        <SkillList src={checkMarkIcon} skill="Vercel" />
        <SkillList src={checkMarkIcon} skill="AWS" />
      </div>

      <hr />

      {/* Frontend & Backend Development */}
      <h2 className={styles.sectionSubtitle}>Frontend & Backend Development</h2>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="React.js" />
        <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        <SkillList src={checkMarkIcon} skill="TypeScript" />
        <SkillList src={checkMarkIcon} skill="EEL" />
        <SkillList src={checkMarkIcon} skill="FastAPI" />
        <SkillList src={checkMarkIcon} skill="PostgreSQL" />
      </div>

      <hr />

      {/* Tools & Frameworks */}
      <h2 className={styles.sectionSubtitle}>Tools & Frameworks</h2>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Git" />
        <SkillList src={checkMarkIcon} skill="Jupyter Notebooks" />
        <SkillList src={checkMarkIcon} skill="VS Code" />
        <SkillList src={checkMarkIcon} skill=" Pandas" />
        <SkillList src={checkMarkIcon} skill="Bootstrap" />
        <SkillList src={checkMarkIcon} skill="Tailwind CSS" />
      </div>

      <hr />

      {/* Specialized Areas */}
      <h2 className={styles.sectionSubtitle}>Specialized Areas</h2>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Computer Vision" />
        <SkillList src={checkMarkIcon} skill="Natural Language Processing" />
        <SkillList src={checkMarkIcon} skill="Reinforcement Learning" />
        <SkillList src={checkMarkIcon} skill="Explainable AI (XAI)" />
        <SkillList src={checkMarkIcon} skill="Optimization Algorithms" />
        <SkillList src={checkMarkIcon} skill="Data Science & Analytics" />
      </div>
    </section>
  );
}

export default Skills;
