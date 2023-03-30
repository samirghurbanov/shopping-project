import Cart from "./components/Cart"
import Product from "./components/Product"
import Collections from "./pages/Collections"
import Home from "./pages/Home"

const routerItem = (path,element) => {
    return {
        path, element
    }
}

const routers = {
    home: routerItem('/', <Home />),
    collections: routerItem('/collections', <Collections />),
    product: routerItem('/collections/product/:productId', <Product />),
    cart: routerItem('/cart', <Cart />)

}

const routerArr = Object.values(routers)

export {routerArr,routers}