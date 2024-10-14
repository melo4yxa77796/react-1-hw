import styles from "./crew.module.css";

const OurCrew = () => {
  const crewFields = [
    {
      name: "Sarah Vega",
      imageUrl: "./crew/image-anousheh-ansari.png",
      title: "Mission Commander",
      description:
        "A former NASA astronaut with over 15 years of experience, Captain Vega leads our missions with unparalleled expertise and a passion for space exploration.",
    },
    {
      name: "Dr. Leo Redding",
      title: "Chief AstroPhysicist",
      imageUrl: "./crew/image-mark-shuttleworth.png",
      description:
        "Our chief astrophysicist, Dr. Redding, is a renowned scientist who has contributed to major space discoveries. He ensures that every journey is as educational as it is exhilarating.",
    },
    {
      name: "Hana Lee",
      title: "Chief Engineer",
      imageUrl: "./crew/image-victor-glover.png",
      description:
        "With her extensive background in aerospace engineering, Hana Lee is responsible for the state-of-the-art technology that powers our spacecraft. Her innovation ensures that our travelers are always in safe hands.",
    },
    {
      name: "Alex Santos",
      title: "Mission Specialist",
      imageUrl: "./crew/image-douglas-hurley.png",
      description:
        "As a mission specialist, Alex’s job is to ensure that every aspect of the journey runs smoothly. With a background in both science and adventure tourism, Alex is the perfect guide for our space travelers.",
    },
    {
      name: "Maya Patel",
      title: "Crew Member",
      imageUrl: "./crew/image-anousheh-ansari.png",
      description:
        "Maya brings a unique blend of technical skills and customer service experience to the team. She’s always ready to assist with any needs and to make sure every traveler has an unforgettable experience.",
    },
  ];

  return (
    <div>
      <h2 className={styles.crewHeading}>
        Our crew is the heart and soul of Galactica. We are a diverse team of
        seasoned space explorers, engineers, and visionaries who are united by a
        common goal: to make space travel accessible and exciting for all.
      </h2>
      <div className={styles.crewList}>
        {crewFields.map((crewMember, index) => (
          <div key={index} className={styles.crewCard}>
            <img src={crewMember.imageUrl} alt={crewMember.name} />
            <h3>{crewMember.name}</h3>
            <p>{crewMember.title}</p>
            <p className={styles.crewDescription}>{crewMember.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurCrew;

