import { Card } from "./Card";
import { en } from "../en";

export const MockTable = () => {
  const mock = "🤔";
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 p-8 pt-10">
      <Card title={en.criteria.eps} emoji={mock} />
      <Card title={en.criteria.bookValue} emoji={mock} />
      <Card title={en.criteria.liabilities} emoji={mock} />
      <Card title={en.criteria.pe} emoji={mock} />
      <Card title={en.criteria.debt} emoji={mock} />
    </div>
  );
};
