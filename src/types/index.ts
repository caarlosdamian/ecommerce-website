export interface BtnVariantsI {
  LINK: string;
  PRIMARY: string;
  SECONDARY: string;
}

export interface LocaleI {
  ENGLISH: string;
}

export type ChildrenFunction = (increment: () => void, decrement: () => void, counter: number) => React.ReactNode;
