import './App.css'
import ProductCard from './components/productCard'

function App() {
  

  return (
    <>
    <ProductCard name="Mac Book Air 256GB" price="255,000.00" image="https://picsum.photos/id/1/200/300" alt="Mac Book Air"/>
    <ProductCard name="Apple iphone 6s" price="150,000.00" image="https://picsum.photos/id/3/200/300" alt="Iphone 6s"/>
    <ProductCard name="Samsung Watch" price="50,000.00" image="https://picsum.photos/id/4/200/300" alt="Samsung watch"/>
    </>
  )
}

export default App