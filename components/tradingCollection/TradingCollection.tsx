import TradingItem from "./TradingItem";

interface ITradingCollectionsProps {
  edges: any;
}

const TradingCollection = ({ edges }: ITradingCollectionsProps) => (
  <>
    <h1>Trading</h1>
    <ul className="list-disc marker:text-blue-500">
      {edges.map((edge: any) => (
        <TradingItem key={edge.node.symbol} item={edge}></TradingItem>
      ))}
    </ul>
  </>
);

export default TradingCollection;
