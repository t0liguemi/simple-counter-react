import { AiOutlineClockCircle } from 'react-icons/ai';

function App(props) {
  return (
    <div>
      <div className="d-grid bg-black py-3 px-4 m-4 fs-1">
        <div className="row">
          <div className="col d-flex justify-content-center w-50 m-4">
            <div className="bg-dark bg-secondary m-2 p-3 text-white rounded border-light"><AiOutlineClockCircle /></div>
            <div className="bg-dark bg-secondary m-2 p-3 text-white rounded border-black">{props.tenthousands}</div>
            <div className="bg-dark bg-secondary m-2 p-3 text-white rounded border-black">{props.thousands}</div>
            <div className="bg-dark bg-secondary m-2 p-3 text-white rounded border-black">{props.hundreds}</div>
            <div className="bg-dark bg-secondary m-2 p-3 text-white rounded border-black">{props.tenths}</div>
            <div className="bg-dark bg-secondary m-2 p-3 text-white rounded border-black">{props.units}</div>
          </div>
        </div>
        <div className="row m-4">
          <form onSubmit={(e)=>props.countdown(e)} className="col d-flex justify-content-center flex-column p-3" id="countdownForm">
            <input className="form-control my-1" type="text" name="countdownInput"/>
            <button type="submit" className="btn btn-secondary my-1" >Countdown</button>
          </form>
          <div className="col d-flex justify-content-center flex-column p-3">
            <button onClick={props.pauseTrigger} className="btn btn-secondary my-1">Pause</button>
            <button onClick={props.resumeTrigger} className="btn btn-secondary my-1">Resume</button>
            <button onClick={props.resetTrigger} className="btn btn-secondary my-1">Reset</button>
          </div>
          <form onSubmit={(e)=>props.alertTrigger(e)} className="col d-flex justify-content-center flex-column p-3">
            <input className="form-control my-1" type="text" name="alertTarget" />
            <button type="submit" className="btn btn-secondary my-1">Alert after</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
