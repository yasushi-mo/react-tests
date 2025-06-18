import { useChoices } from "./../contexts/ChoiceContext";

const ChoiceViewer = () => {
  const { fruitChoices, vegetableChoices } = useChoices();

  return (
    <div>
      <h3>果物の選択肢</h3>
      <ul>
        {fruitChoices.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>

      <h3>野菜の選択肢</h3>
      <ul>
        {vegetableChoices.map((vegetable) => (
          <li key={vegetable}>{vegetable}</li>
        ))}
      </ul>
    </div>
  );
};

export default ChoiceViewer;
