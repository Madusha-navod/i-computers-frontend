
export default function ProductCard(props) {

  console.log(props)
  console.log("product card rendered")
  console.log("product card rendered successfully")

  return (
    <div className="border w-56 h-80 rounded-lg shadow-md m-3">
      <h1 className="text-lg font-bold m-1 text-center">{props.name}</h1>
      <img src={props.image}
      alt={props.alt} className="w-40 h-40 m-2" />
      <p className="text-md font-bold m-1 text-left">LKR. {props.price}</p>
    </div>
  )

}
