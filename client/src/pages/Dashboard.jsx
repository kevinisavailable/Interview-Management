import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Layout from '../components/Layout/Layout'
import ProductList from '../components/ProductList/ProductList'
import ProductSummary from '../components/ProductSummary/ProductSummary'
import { selectIsLoggedIn } from '../redux/features/auth/authSlice'
import { getProducts } from '../redux/features/product/productSlice'
import Card from '../components/Card'


const Dashboard = () => {
  const dispatch = useDispatch()
  const isLoggedIn = useSelector(selectIsLoggedIn)
  const{products , isLoading , isError , message} = useSelector((state)=>state.product)

  useEffect(() => {
    if(isLoggedIn === true){
      dispatch(getProducts())
    }
    if(isError){
      console.log(message)
    }
  }, [dispatch])
  
  return (
    <div>
    <Layout>
        {/* <ProductSummary /> */}
        <Card>
        <ProductList products = {products}/>
        </Card>
    </Layout>
    </div>
  )
}

export default Dashboard