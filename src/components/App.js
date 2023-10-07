import React from 'react';

import './App.css';

import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';
import reducer from '../reducers/index';
import { useReducer } from 'react';
import { initialState } from '../reducers/index';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleAddNumber = (num) => {
    dispatch({ type: 'APPLY_NUMBER', payload: num });
  }

  const handleOpClick = (operator) => {
    dispatch({ type: 'CHANGE_OPERATION', payload: operator });
  }

  const handleCEClick = (e) => {
    dispatch({type:'CLEAR_DISPLAY', payload: e.target.value})
  }

  const handleSetMem = (e) => {
    dispatch({type:'SET_MEMORY', payload: e.target.value})
  }
  const hanApplyMemory = (e) => {
    dispatch({type:'APPLY_MEMORY', payload: e.target.value})
  }

  const hanClearMemory = (e) => {
    dispatch({type:'CLEAR_MEMORY', payload: e.target.value})
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={handleSetMem}/>
              <CalcButton value={"MR"} onClick={hanApplyMemory}/>
              <CalcButton value={"MC"} onClick={hanClearMemory}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => handleAddNumber(1)} />
              <CalcButton value={2} onClick={() => handleAddNumber(2)} />
              <CalcButton value={3} onClick={() => handleAddNumber(3)} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => handleAddNumber(4)} />
              <CalcButton value={5} onClick={() => handleAddNumber(5)} />
              <CalcButton value={6} onClick={() => handleAddNumber(6)} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => handleAddNumber(7)} />
              <CalcButton value={8} onClick={() => handleAddNumber(8)} />
              <CalcButton value={9} onClick={() => handleAddNumber(9)} />
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() => handleOpClick("+")}/>
              <CalcButton value={"*"} onClick={() => handleOpClick("*")}/>
              <CalcButton value={"-"} onClick={() => handleOpClick("-")}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={handleCEClick}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
