
import { useState, useEffect } from "react";



function App() {
  const [loading, setLoading] = useState(true);
  const [coins,setCoins] = useState([]);
  const [currentCoinPrice, setCurrentCoinPrice] = useState(0);
  const [investAmount, setInvestAmount] = useState(0)

  const onSelect = (event) => setCurrentCoinPrice(parseFloat(event.target.value));
  const onChangeAmount = (event) => {
    setInvestAmount(parseFloat(event.target.value))
    
  };

  //페이지 로딩되자마자 api로 데이터 가져오기
  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
    .then((response) => response.json())
    .then((json) => {
      setCoins(json);
      setLoading(false);
    })
  },[])

  return (
    <div>
      <h1> The coins!</h1>
      {loading ? <strong>Loading...</strong>:null}
      <select onChange={onSelect}>
        {coins.map((coin)=> (
          <option key={coin.id} value={coin.quotes.USD.price}>
            {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} 
          </option>
        ))}
      </select>
      <hr></hr>
      
      <label htmlFor="invest">Invest $</label>
      <input id="invest" onChange={onChangeAmount} type="number" placeholder="amount to invest?" value={investAmount}></input>
      <label> is currently </label>
      <input id="convert" type="number" readOnly value={(currentCoinPrice!=0?investAmount/currentCoinPrice:0)}></input>  
    </div>
  );
}

export default App;
