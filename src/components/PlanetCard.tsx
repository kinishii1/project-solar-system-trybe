interface PlanetCardProps {
  planetName: string;
  planetImage: string;
}

function PlanetCard({ planetName, planetImage }: PlanetCardProps) {
  return (
    <div className="planet-card" data-testid="planet-card">
      <img src={ planetImage } className={ planetName } alt={ `Planeta ${planetName}` } />
      <p data-testid="planet-name">{planetName}</p>
    </div>
  );
}

export default PlanetCard;
