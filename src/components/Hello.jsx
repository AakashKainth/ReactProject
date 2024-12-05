const name = "Kyra";

function displayMessage(){
    return "Wow!";
}
function Hello() {
  //return <h1>Her name is {name} {10+22}!</h1>;
  return <h1>{displayMessage()}</h1>
}

export default Hello;
