import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import { useDispatch } from 'react-redux';
import { stepAction } from '../store/StepSelectorSlice';
import { CVTemplate } from './CVTemplate';

const PrintComponent = () => {
  const componentRef = useRef();
  const dispatch = useDispatch();
  const clickEdit = ()=>{
      dispatch(stepAction.changeStep('1'));
      dispatch(stepAction.changeFilledState())
  }
  return (
    <div>
      
      <div style={{border:" 1px solid black"}}><CVTemplate ref={componentRef} /></div>
      <div className='mt-3 d-flex justify-content-around'><ReactToPrint 
        trigger={() => <button className='btn' style={{backgroundColor:"#C2DED1"}}>Download PDF!</button>}
        content={() => componentRef.current}
      /><button className='btn' style={{backgroundColor:"#C2DED1"}} onClick={clickEdit} >Edit</button></div>
      
    </div>
  );
};

export default PrintComponent;