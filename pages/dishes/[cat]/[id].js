import Image from "next/image";
import { Button } from "reactstrap";


const MenuItem = (props) => {
    const data = props.data;

    return (<>
        <h1></h1>
        <div key={data.id} className="card">
            <h2 >{data.name}</h2>
            <div className="image">
            <Image key={data.id} src={data.image} width={500} height={500} alt={data.name}/>
            </div>
            <h5>{data.restaurant}</h5>
            <p>{data.description}</p>
            <p>{data.price}</p>
            <div>
                <Button className="snipcart-add-item"
                    data-item-id={data.name}
                    data-item-price={data.price}
                    data-item-description={data.description}
                    data-item-image={data.image}
                    data-item-name={data.name}>
                    Add to Cart</Button>
            </div>
        </div>
        
        </>)
}
export default MenuItem;

export async function getStaticPaths(){
    const data = await import('../../../data/content.json');
    const dishes = data.dishes;

    const allPaths = dishes.map((paths) => {
        return {
            params: {
                cat: paths.restaurant,
                id: paths.id,
            },
        };
    });

    return {
        paths: allPaths,
        fallback: false,
    };
}

export async function getStaticProps(context){
    const id = context.params.id;
    const {dishes} = await import ('../../../data/content.json');
    const dishData = dishes.find((re) => (
        id === re.id
    ))
    return {
        props: {data: dishData}
    }
}