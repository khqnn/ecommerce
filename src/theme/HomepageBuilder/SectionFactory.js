import { categorySliderBuilder } from "./CategorySliderBuilder";
import { customSectionBuilder } from "./CustomSectionBuilder";
import { productSliderBuilder } from "./ProductSliderBuilder";
import { sliderBuilder } from "./SliderBuilder";
import { templateCustomSectionBuilder } from "./TemplateCustomSectionBuilder";

export class SectionFactory {
    constructor(section) {
        this.section = section
    }

    init(businessData) {
        switch (this.section.type) {
            case "category_slider":
                return categorySliderBuilder(businessData, this.section)
            case "product_slider":
                return productSliderBuilder(businessData, this.section)
            case "custom_section":
                return customSectionBuilder(this.section)
            case "custom_section_template":
                return templateCustomSectionBuilder(businessData, this.section)
            case "slider":
                return sliderBuilder(businessData, this.section)
        }
        return <></>
    }
}