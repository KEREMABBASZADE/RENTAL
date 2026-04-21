import car from "../../assets/icons/car.svg";
import searchnormal from "../../assets/icons/searchnormal.svg";
import filter from "../../assets/icons/filter.svg";
import { Link } from "react-router-dom";
function HowItWorks() {
  const steps = [
    {
      id: 1,
      icon: <img src={searchnormal} alt="Search" />,
      title: "Find a car",
      desc: "Choose from a wide selection of cars that suit your needs and budget.",
    },
    {
      id: 2,
      icon: <img src={filter} alt="Filter" />,
      title: "Book a car",
      desc: "Fill in your details, select pick-up and drop-off locations and dates.",
    },
    {
      id: 3,
      icon: <img src={car} alt="Car" />,
      title: "Get your car",
      desc: "Pick up your car at the selected location and enjoy your ride.",
    },
  ];

  return (
    <section className="how">
      <div className="how__header">
        <h2 className="how__title">How it Works</h2>
        <p className="how__desc">Follow these simple steps to rent a car</p>
      </div>
      <div className="how__grid">
        {steps.map((step) => (
          <div key={step.id} className="how__card">
            <div className="how__icon">
              <Link to="/cars">{step.icon}</Link>
            </div>
            <h3 className="how__step-title">{step.title}</h3>
            <p className="how__step-desc">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;
