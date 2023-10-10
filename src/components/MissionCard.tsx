import icon from '../images/icon.svg';
import icon1 from '../images/icon1.svg';
import icon2 from '../images/icon2.svg';

interface MissionCardProps {
  name: string;
  year: string;
  country: string;
  destination: string;
}
function MissionCard({ name, year, country, destination }: MissionCardProps) {
  return (
    <div className="mission-card" data-testid="mission-card">
      <p className="mission-name" data-testid="mission-name">
        {name}
      </p>
      <div className="mission-descs">
        <div className="mission-desc">
          <img src={ icon } alt="" />
          <p className="mission-year" data-testid="mission-year">
            {year}
          </p>
        </div>

        <div className="mission-desc">
          <img src={ icon1 } alt="" />
          <p className="mission-country" data-testid="mission-country">
            {country}
          </p>
        </div>

        <div className="mission-desc">
          <img src={ icon2 } alt="" />
          <p className="mission-destination" data-testid="mission-destination">
            {destination}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MissionCard;
