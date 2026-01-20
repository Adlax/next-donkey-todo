import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="splash-container">
      <div className="left-box">
        <section>
          <h1>Bienvenue sur l'application next</h1>
          <p>Une petite appli CRUD sur bdd no-sql mongo</p>
          <h2>Objectifs : </h2>
          <ul>
            <li>Tapper du Next</li>
            <li>Routage par app-router</li>
            <li>Integrer mongo avec avec CRUD</li>
          </ul>
        </section>
      </div>
      <div className="right-box">
        <Image
          src={"/snowman.png"}
          alt="Bonhomme de neige"
          width={"400"}
          height={"400"}
        />
      </div>
    </div>
  );
}
