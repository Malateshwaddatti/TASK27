import {useState} from"react";
import './App.css';

function App() {
  const brands=[
    {name:"Sumsung",model:"SIII",
    desc:"Samsung Mobile Phones · Samsung Mobile: A Smartphone at a Smart Price · Samsung Galaxy F22 · Samsung Galaxy F41 · Samsung Galaxy F62 · Samsung A21s · Samsung"},
    {name:"Apple",model:"I75",
   desc:"The new iPhone 13 Pro and iPhone 13. Buy now. Get No Cost EMI for 12 months with qualifying Credit Cards. Retina display. Privacy built in. Wide camera. Water..."},
   {name:"Sony",model:"Xpriya",
   desc:"Xperia Pro-I · Xperia 10 III Lite · Xperia 1 III · Xperia 5 III · Xperia 10 III · Xperia Pro · Xperia 5 II · Xperia 1 II ..."},
   {name:"Tesla",model:"se12",
 desc:"The idea of a Tesla phone, rumored to be called Model Pi/P, has been circulating the internet. But how likely is a smartphone release?"},
  ];
  return (
    <div className="App">
    {/*<Plans/>*/}
    {brands.map((brand,index)=>(
       <Counter key={index} name={brand.name}model={brand.model}desc={brand.desc}/>
    ))}
    </div>
  );

}

function Plans(){
  const Plans = [
    {name:"FREE",price:0,features:[
      "Single User",
      "5GB Storage",
      "Unlimited Public Projects",
      "Community Access",
      "Unlimited Private Projects",
      "Dedicated Phone Support",
      "Free Subdomain",
      "Monthly Status Reports",
        ],},

    {name:"PLUS",price:9,features:[
"5 Users",
"50GB Storage",
"Unlimited Public Projects",
"Community Access",
"Unlimited Private Projects",
"Dedicated Phone Support",
"Free Subdomain",
"Monthly Status Reports",
    ],},

    {name:"PRO",price:49,features:[
"Unlimited Users",
"150GB Storage",
"Unlimited Public Projects",
"Community Access",
"Unlimited Private Projects",
"Dedicated Phone Support",
"Unlimited Free Subdomains",
"Monthly Status Reports",
    ],},
    
  ];
  return(
<div>
  {Plans.map((plan)=>(
    <Card name={plan.name} price={plan.price} features={plan.features}/>

  ))}
  
</div>
  );
}

function Card(props){
 
   
  return(
  <div className='card'>
    <p className='plan-name'>{props.name}</p>
    <p className="price">${props.price}<span className='price-duration'>/month</span></p>
   <ul className="features">
     {props.features.map((feature)=>(<li>{feature}</li>))}
   </ul>
   <button className='buy'>BUY</button>
  </div>
  );

}
    

function Counter(props){
  const[like,setLike]=useState(0);
  const[dislike,setDislike]=useState(0);
  const[show,setShow]=useState(true);
  const styles={background:like>dislike?"green":"red",padding:"5px",marginBottom:"10px",}
  return(
    <div style={styles}>
      <h1>{props.name}</h1>
      <h3>{props.model}</h3>
      <button onClick={()=>setShow(!show)}>Show more</button>
     {show?<h2>{props.desc}</h2>:""}


      <button onClick={()=>setLike(like +1)}>👍{like}</button>
      <button onClick={()=>setDislike(dislike+1)}>👎{dislike}</button>
    </div>
  )
}

export default App;
