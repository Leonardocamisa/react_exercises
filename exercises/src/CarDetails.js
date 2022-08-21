import { useRef } from "react";

const CarDetails = ({initialData}) => {

  const handleSubmit = (event) => {
   event.preventDefault()
    const model = refModel.current.value;
    const color = refColor.current.value;
    const year = refYear.current.value;
    console.log({model,year,color})
  };

  const refModel = useRef(initialData.model);
  const refYear = useRef(initialData.year);
  const refColor = useRef(initialData.color);

  return (

      <form action="" >
        <div>
          <input type="text" ref={refModel} placeholder = {refModel.current}/>
          <input type="text" ref={refYear} placeholder = {refYear.current}/>
          <input type="text" ref={refColor} placeholder = {refColor.current}/>
        </div>
        <button onClick={handleSubmit}>SUBMIT</button>
        <button type="reset">RESET</button>
      </form>
  );
}

export default CarDetails;