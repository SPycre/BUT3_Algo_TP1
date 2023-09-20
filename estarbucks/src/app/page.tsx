import Image from 'next/image'
import { BreadCrumbs, Button, Heading, ProductCardLayout, ProductGridLayout, SectionContainer } from 'tp-kit/components';
import { PRODUCTS_CATEGORY_DATA } from "tp-kit/data";
const categories = PRODUCTS_CATEGORY_DATA;

export default function Home() {

  let products = []
  categories.forEach(element => {
    element.products.forEach(product => {
      products.push(product)
    })
  });

  return (
    <main>
      <SectionContainer>
        <BreadCrumbs
          items={[
            {
              label: 'Accueil',
              url: '#'
            },
          ]}
        />
        {categories.map((category) => <SectionContainer>
          <Heading as="h1" size="md" weight="bold">{category.name + '(' + category.products.length + ')'}</Heading>
          

          <ProductGridLayout products={category.products}>
            {(product) => <ProductCardLayout button={<Button variant="ghost">Ajouter au panier</Button>}
                product={{
                  desc: product.desc,
                  id: product.id,
                  img: product.img,
                  name: product.name,
                  path: product.path,
                  price: product.price,
                  slug: product.slug}}
            />}

          </ProductGridLayout>
          
        </SectionContainer>)}
      </SectionContainer>
    </main>
  )
}
