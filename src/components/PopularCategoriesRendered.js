import { categories } from "../data";
import PopularCategories from "./PopularCategories";


const PopularCategoriesRendered = () => {

  /**
   * Fetch popular categories
   */
  const popularCategories = categories

  return (
    <PopularCategories categories={popularCategories} />
  );
};

export default PopularCategoriesRendered;