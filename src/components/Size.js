import React, { useState } from "react";

const Size = () => {
  const sizeData = [
    {
      size: "6''x 6''",
      price: "₹599",
    },
    {
      size: "12''x 12''",
      price: "₹799",
    },
    {
      size: "12''x 18''",
      price: "₹999",
    },
    {
      size: "18''x 12''",
      price: "₹799",
    },
    {
      size: "16''x 20''",
      price: "₹1399",
    },
  ];
  const [radioInd, setRadioInd] = useState(null);
  return (
    <div className="sizes">
      <div className="row">
        <div className="col-6">
          <div className="radio_btns">
            {sizeData.map((item, index) => (
              <div className="form-check my-2" key={index}>
                <input
                  className="form-check-input"
                  type="radio"
                  name="size"
                  id={`size${index}`}
                  checked={radioInd === index}
                  onClick={() => setRadioInd(index)}
                />
                <label
                  className={`form-check-label mx-2 ${
                    radioInd === index && "text-danger"
                  } `}
                  for={`size${index}`}
                >
                  <span>{item.size}</span> <span>| {item.price}</span>
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="col-6">
          <div className="box">
            <div>Square canvas</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Size;
