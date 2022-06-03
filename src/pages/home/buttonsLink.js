import { infoButtons } from "./helpers";

const ButtonsLink = () => {
  return (
    <>
      {infoButtons.map((element) => (
        <li key={element.id} className={element.styleButton}>
          <a href={element.to} target="_blank" rel="noreferrer">
            {element.title}
          </a>
        </li>
      ))}
    </>
  );
};

export default ButtonsLink;
