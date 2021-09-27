import React from "react";

const DestinationDetailModal = ({ excursion }) => {
  return (
    <div
      className="modal fade"
      id={excursion.excursionCode}
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              {excursion.excursionName}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <img
              src={`https:${excursion.excursionImages.Img4x3[0]}`}
              className="img-fluid rounded-start"
              alt={`https:${excursion.excursionImages.ImgThumbnails[0]}`}
            />

            <ul className="card-text mt-3">
              {excursion.excursionShortDescription.split("•").map((item, i) => (
                <li key={i} className="mb-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-outline-primary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetailModal;
