import React, { useEffect, useState } from "react";

import { getDestinationDetail } from "../api/api";
import DestinationDetailCard from "./DestinationDetailCard";
import DestinationDetailModal from "./DestinationDetailModal";
import FilterCategory from "./FilterCategory";
import FilterSubCategory from "./FilterSubCategory";

const DestinationDetail = (props) => {
  const { country, destination } = props.match.params;

  const [destinationDetail, setDestinationDetail] = useState([]);
  const [filteredData, setFilteredData] = useState(destinationDetail);
  const [enableSubcategory, setEnableSubcategory] = useState(false);
const [inputSearch, setInputsearch] = useState("")

  useEffect(() => {
    setFilteredData([]);
    setEnableSubcategory(false);
    getDestinationDetail(country, destination)
      .then((result) => {
        setDestinationDetail(result);
        setFilteredData(result);
      })
      .catch((error) => {
        console.log("Error getting fake data: " + error);
      });
  }, [country, destination]);

  // filter by category
  const filterByCategory = (e) => {
    if (e.target.value !== "all") {
      const filterCategory = destinationDetail.filter(
        (destination) => destination.categoryName === e.target.value
      );
      setFilteredData(filterCategory);
      setEnableSubcategory(true);
      console.log(filteredData);
    } else {
      setFilteredData(destinationDetail);
    }
  };

  // filter by sub category
  const filterBSubcategory = (e) => {
    const filterCategory = filteredData.map((element) => {
      return {
        ...element,
        subCategories: element.subCategories.filter(
          (subElement) => subElement.subCategoryName === e.target.value
        ),
      };
    });
    setFilteredData(filterCategory);
  };


  return (
    <div className="destination-detail">
      <div className="row">
        <h2 className="text-uppercase py-5 text-center">
          Things you can do in {destination}, {country}
        </h2>
      </div>

      <div className="row">

        {filteredData.length !== 0 ? (
          <>
            <div className="col-md-3">
              <h4 className="mb-4">Filter By</h4>
              <div className="filters pe-md-5">
                <FilterCategory
                  data={destinationDetail}
                  onChangeCategory={filterByCategory}
                />
                <FilterSubCategory
                  data={filteredData}
                  onChangeSubCategory={filterBSubcategory}
                  enable={enableSubcategory}
                />
              </div>
            </div>
            <div className="col-md-9">
              <div className="row  border-start">
                {filteredData.map((catagory) =>
                  catagory.subCategories.map((subCatagory, j) =>
                    subCatagory.excursions.map((excursion, i) => (
                      <>
                        <DestinationDetailCard
                          key={i}
                          catagory={catagory}
                          subCatagory={subCatagory}
                          excursion={excursion}
                        />
                        <DestinationDetailModal
                          key={i + 1}
                          excursion={excursion}
                        />
                      </>
                    ))
                  )
                )}
              </div>
            </div>
          </>
        ) : (
          <h1>Loading......</h1>
        )}
      </div>
    </div>
  );
};

export default DestinationDetail;
