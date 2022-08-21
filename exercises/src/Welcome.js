export function Welcome({name}) {
    return(
    <div>
        <h1>HELLO {!name ? "WORLD" : name}</h1>
    </div>)
}