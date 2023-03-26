import React from "react";
import Image from "next/image";
import Link from "next/link";

const Dish = (props) => {
    const data = props.data;

    return (
        <React.Fragment key={data.id}>
            <Link legacyBehavior href="/menu">Order Online Today!</Link><br>
            </br>
            {data.map((posts) => (
                <a key={posts.id} href={`/dishes/${posts.id}`}>
                    <Image alt={posts.id} src={posts.image} height={150} width={200} style={{padding:5}}/>
                </a>
            ))}
        </React.Fragment>
    )
}

export default Dish;

export async function getStaticProps(){
    const {restaurants} = await import('../../data/content.json');

    return {
        props: {
            data: restaurants,
        }
    }
}