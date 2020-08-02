import React, { useState } from 'react';
import { CategoryAdd } from './components/CategoryAdd';
import { PageTitle } from './components/PageTitle';
import { PageGrid } from './components/PageGrid';

export const GifExpertApp = () => {
  const title = 'GifExpertApp';

  const [categories, setCategories] = useState(['One Punch']);

  return (
    <>
      <PageTitle title={title} />
      <CategoryAdd setCategories={setCategories} />
      <div className="divider"></div>
      {
        // categories.map((category) => (
        //   <PageGrid key={`category-${category}`} category={category} />
        // ))
        <PageGrid category={categories[0]} />
      }
    </>
  );
};
