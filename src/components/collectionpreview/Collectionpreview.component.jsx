import React from "react";
import "./Collectionpreview.styles.scss";
import Collectionitem from "../collection-item/Collection-item.component";
export default function Collectionpreview({ id, title, items }) {
  return (
    <div className="collection-preview">
      <h1>{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...otheritemprops }) => (
            <Collectionitem key={id} {...otheritemprops} />
          ))}
      </div>
    </div>
  );
}
