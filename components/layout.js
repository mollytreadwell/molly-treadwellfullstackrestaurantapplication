import Link from "next/link";
import { Container } from 'reactstrap';
import { useSnipcart } from "use-snipcart";

export default function Layout(props){
const {cart = {}} = useSnipcart();


    return (
      <div>
      <header>
      <div>
        <div className="topNav">
          <nav>
            <ul>
              <li>
                <Link href="/" passHref>
                  <div className="topNav-right"> Home</div>
                </Link>
              </li>
              <li>
                <Link href="/menu" passHref>
                  <div className="topNav-right"> Order Online</div>
                </Link>
              </li>
              <li>
                <button className="snipcart-checkout">  
                  <span>
                  ${cart.subtotal?.toFixed(2)}
                  </span>
                  </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
        <Container className="body">{props.children}</Container>
      </div>
    )
}