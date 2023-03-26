import React from "react";
import Image from "next/image";
import Link from "next/link";

const Dishes = (props, {pageName}) => {

    const data = props.data;

    return (
        <div>
            <h1>{pageName} Menu</h1>
            {data.map((posts) => (
                <React.Fragment key={posts.id}>
                    <div className="card">
                        <Link legacyBehavior href={`/dishes/${posts.restaurant}/${posts.id}`} passHref>
                            <div className="image">
                                <Image alt={posts.name} height={300} width={300} src={posts.image}/>
                            </div>
                        </Link>                  
                    </div>
                </React.Fragment>
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