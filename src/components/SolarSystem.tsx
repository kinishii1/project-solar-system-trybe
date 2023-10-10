import Title from "./Title";
import PlanetCard from "./PlanetCard";
import planets from "../data/planets";

function SolarSystem() {
  return (
    <div data-testid="solar-system">
      <Title headline="Planetas" />
      <div>
        {planets.map((planet) => (
          <PlanetCard
            key={ planet.name }
            planetName={ planet.name }
            planetImage={ planet.image }
          />
        ))}
      </div>
    </div>
  );
}

export default SolarSystem;
