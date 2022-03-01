import { useSelector,useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state";

function App() {
  const state = useSelector((state)=>{
    return state.account;
  });
  const dispatch = useDispatch();
  const {depositMoney,withdrawMoney} = bindActionCreators(actionCreators,dispatch);

  console.log(state);
  return (
    <div className="App">
      <h1>{state}</h1>
      <button onClick={()=>depositMoney(100)}>Deposit</button>
      <button onClick={()=>withdrawMoney(100)}>Withdraw</button>
    {/* <h1>{state}</h1> */}
    </div>
  );
}

export default App;
