import styles from "./values.module.css";

const OurValues = () => {
  const valueFields = [
    {
      heading: "01",
      subHeading: "Exploration",
      description:
        "We are driven by a deep-seated desire to explore the unknown. We believe that the pursuit of discovery is at the heart of human nature, and we are committed to pushing the boundaries of what is possible.",
    },
    {
      heading: "02",
      subHeading: "Innovation",
      description:
        "At Galactica, we prioritize cutting-edge technology and innovation. We are constantly evolving our spacecraft, safety protocols, and services to ensure that our travelers experience the most advanced and secure space journeys available.",
    },
    {
      heading: "03",
      subHeading: "Sustainability",
      description:
        "We are committed to making space exploration sustainable for future generations. Our space missions are designed to minimize environmental impact, both on Earth and in space, and to foster a spirit of responsibility towards our universe.",
    },
    {
      heading: "04",
      subHeading: "Community",
      description:
        "We believe in the power of collective exploration. Our journeys are not just about reaching new destinations; they are about building a community of space enthusiasts who share a passion for the stars.",
    },
  ];

  // TASK - React 1 week 1
  // Create the "Our Values" section
  // Use the descriptions provided in /app/about_us/README.md
  // Some inspiration ideas found in /data/inspiration_about_us
  return (
    <>
      <div className={styles.ourValues}>
        {valueFields.map((value, index) => (
          <div key={index}>
            <div>
              <h1>{value.heading}</h1>
            </div>
            <div>
              <h2>{value.subHeading}</h2>
            </div>
            <div>
              <p>{value.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default OurValues;
