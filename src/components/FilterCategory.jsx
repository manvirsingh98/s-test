import React from 'react'

const FilterCategory = ({data, onChangeCategory}) => {


    
    return (
        <div className="category-filter">
              <select className="form-select mb-3" defaultValue="All" onChange={onChangeCategory}>
                <option disabled>Category</option>
                <option  value="all">All</option>
                {data.filter((tag, index, array) => array.findIndex(t => t.categoryName === tag.categoryName) === index).map((category,i) => (
                    <option key={i} value={category.categoryName}>{category.categoryName}</option>
                ))}
            </select> 
        </div>
    )
}

export default FilterCategory
