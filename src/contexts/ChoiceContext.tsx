import { createContext, ReactNode, useContext } from "react";

// eslint-disable-next-line @typescript-eslint/naming-convention
type ChoiceContextType = {
  fruitChoices: string[];
  vegetableChoices: string[];
};

const ChoiceContext = createContext<ChoiceContextType>({
  fruitChoices: [],
  vegetableChoices: [],
});

export const ChoiceProvider = ({ children }: { children: ReactNode }) => {
  const fruitChoices = ["りんご", "みかん", "バナナ"];
  const vegetableChoices = ["にんじん", "ほうれん草", "ピーマン"];

  return (
    <ChoiceContext.Provider value={{ fruitChoices, vegetableChoices }}>
      {children}
    </ChoiceContext.Provider>
  );
};

/** Contextの値を取得するカスタムフック */
export const useChoices = () => useContext(ChoiceContext);
