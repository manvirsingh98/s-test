import React from "react";

const DestinationDetailCard = ({ excursion, subCatagory, catagory }) => {
  return (
    <div
      className="col-md col-lg-4 col-sm-6 d-flex"
      data-bs-toggle="modal"
      data-bs-target={`#${excursion.excursionCode}`}
      style={{ cursor: "pointer" }}
    >
      <div className="card mb-3" style={{ maxWidth: "540px" }}>
        <div className="row g-0 h-100">
          <div className="col-md-4">
            <img
              src={`https:${excursion.excursionImages.Img4x3[0]}`}
              className="img-fluid h-0 rounded-start"
              alt={`https:${excursion.excursionImages.ImgThumbnails[0]}`}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body position-relative h-100">
              <h5 className="card-title text-truncate">
                {excursion.excursionName}
              </h5>
              <p className="card-text">
                <small className="text-muted">{catagory.categoryName}</small>
              </p>
              <p className="card-text sub-category mb-5">
                <small className="text-muted">
                  {subCatagory.subCategoryName}
                </small>
              </p>
              <div className="btn btn-sm btn-dark position-absolute bottom-0 end-0 me-4 mb-2" data-bs-toggle="modal"
      data-bs-target={`#${excursion.excursionCode}`}>Read More</div>     
                     </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetailCard;
