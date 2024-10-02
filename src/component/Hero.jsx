import products from '../data/products'
import ProductItems from './ProductItems'

const Hero = () => {
  return (
    <>
        <div className='w-full h-screen p-10'>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 gap-3'>
            {products.map((p)=>{
                return <ProductItems key={p.id} name={p.name} price={p.price} desc={p.desc} id={p.id} img={p.img}  />
            })}
            </div>
        </div>
    </>
  )
}

export default Hero