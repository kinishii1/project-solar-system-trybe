type TitleProps = {
  headline: string;
};

function Title({ headline } : TitleProps) {
  return <h2 className="title">{headline}</h2>;
}

export default Title;
