interface ITradingItem {
  item: any;
}
const TradingItem = ({ item }: ITradingItem) => {
  return (
    <li
      key={item.node.symbol}
      className="max-w-m rounded overflow-hidden shadow-lg"
    >
      <div key={item.node.symbol} className="px-6 py-4">
        <span>Symbol: {item.node.symbol}</span> <br />
        <span>Name: {item.node.name}</span> <br />
        <span>Address: {item.node.address}</span>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span>totalSales: {item.node.stats.totalSales}</span> <br />
        <span>average: {item.node.stats.average}</span> <br />
        <span>ceiling: {item.node.stats.ceiling}</span> <br />
        <span>floor: {item.node.stats.floor}</span> <br />
        <span>volume: {item.node.stats.volume}</span> <br />
      </div>
    </li>
  );
};

export default TradingItem;
