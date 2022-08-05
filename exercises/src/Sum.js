export function Sum({numbers = [1,2,3]}){
    const res = numbers.reduce((previus, current) => previus + current)
    return (
     <h1>{res}</h1>
    )
    }   