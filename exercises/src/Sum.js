export function Sum(props){
    const res = props.numbers.reduce((previus, current) => previus + current)
    return (
     <h1>{res}</h1>
    )
   }