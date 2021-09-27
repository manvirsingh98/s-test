import React from 'react'

const FilterSubCategory = ({data, onChangeSubCategory,enable}) => {

     
    return (
        <div>
          
          <select disabled={!enable ? true : null}   className="form-select mb-3" aria-label="Default select example" onChange={onChangeSubCategory}>
                <option disabled>Sub Category</option>
                {data.filter((tag, index, array) => array.findIndex(t => t.categoryName === tag.categoryName) === index).map((category,i) => (
                category.subCategories.map((subCategoy,j) => (
                    <option key={j} value={subCategoy.subCategoryName}>{subCategoy.subCategoryName}</option>
                ))
            ))}
               
            </select>    
        </div>
    )
}

export default FilterSubCategory
