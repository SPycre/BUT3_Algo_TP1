import { ProductFilters } from '@/components/product-filters';
import ProductList from '@/components/product-list';
import Image from 'next/image'
import { BreadCrumbs, Button, Heading, ProductCardLayout, ProductGridLayout, SectionContainer } from 'tp-kit/components';
import { PRODUCTS_CATEGORY_DATA } from "tp-kit/data";
const categories = PRODUCTS_CATEGORY_DATA;

export default function Home() {
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
        <ProductList categories={categories}/>
      </SectionContainer>
    </main>
  )
}
