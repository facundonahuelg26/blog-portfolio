const ButtonsLink = () => {
  return (
    <>
      <li className="bg-textGlobalLight hover:font-bold text-textGlobalDark rounded h-9 px-3 flex justify-center items-center">
        <a
          href="https://facundonahuelg26.github.io/game-store-app/"
          target="_blank"
          rel="noreferrer"
        >
          Demo
        </a>
      </li>
      <li className="text-textGlobalLight dark:text-textGlobalDark hover:font-bold rounded h-9 px-3 box-border border-solid border-2 border-textGlobalLight dark:border-textGlobalDark flex justify-center items-center">
        <a
          href="https://github.com/facundonahuelg26/game-store-app"
          target="_blank"
          rel="noreferrer"
        >
          Code
        </a>
      </li>
    </>
  );
};

export default ButtonsLink;
