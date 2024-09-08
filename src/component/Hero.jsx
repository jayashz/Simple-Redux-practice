import products from '../data/products'
import ProductItems from './ProductItems'

const Hero = () => {
  return (
    <>
        <div className='w-full h-screen p-10'>
            <div>
            {products.map((p)=>{
                return <ProductItems key={p.id} name={p.name} price={p.price} desc={p.desc} id={p.id}  />
            })}
            </div>
        </div>
    </>
  )
}

export default Hero