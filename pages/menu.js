import React from 'react';
import Image from 'next/image';
import { Button } from 'reactstrap';


export default function Menu(props) {
  const dish = props.dish;

  return (
      <div>
        {dish.map(post =>
          <React.Fragment key={post.id}>
            <div className="card">
              <div className='image'>
                <Image key={post.id} src={post.image} height={100} width={120} alt={post.name}/>
              </div>
            <h2>{post.name}</h2><br></br>
            <p>{post.restaurant}</p>
            <p>${post.price}</p>
              <div>
               <Button key={post.id} className="snipcart-add-item"
                  data-item-id={post.name}
                  data-item-price={post.price}
                  data-item-description={post.description}
                  data-item-image={post.image}
                  data-item-name={post.name}>
                  Add to Cart
               </Button>
              </div>
            </div>
          </React.Fragment>)}
      </div>
  )
}

// Fetching data from the JSON file
import fsPromises from 'fs/promises';
import path from 'path'
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  return {
    props: objectData
  }
}