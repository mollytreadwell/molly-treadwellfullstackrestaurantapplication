import Image from "next/image";
import Link from "next/link";

const Dishes = ({ data, pageName }) => {


    return (
        <div>
            <h1>{pageName} Menu</h1> 
            {data.map((re) => (
                <div key={re.id} className="card">
                    <Link legacyBehavior key={data.id} href={`/dishes/${re.restaurant}/${re.id}`} passHref>
                        <div key={data.id} className="image">
                        <Image key={data.id} alt={re.name} height={300} width={300} src={re.image}/>
                        </div>
                    </Link>                  
                </div>
                ))}
        </div>
    )
}

export default Dishes;

export async function getStaticPaths(){
    const {restaurants} = await import ('../../../data/content.json');
    const allPaths = restaurants.map((re) => {
        return {
            params: {
                cat: re.id.toString(),
            },
        };
    });
    console.log(allPaths)

    return {
        paths: allPaths,
        fallback: false,
    }
}

export async function getStaticProps(context){
    console.log(context);
    const id = context?.params.cat;
    const {dishes} = await import('../../../data/content.json');

    const data = dishes.filter((re) => re.restaurant === id);
    console.log(data);

    return {props: {data, pageName: id}};
}