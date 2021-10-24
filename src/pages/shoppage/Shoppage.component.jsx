import React, { Component } from "react";
import "./Shoppage.styles.scss";
import SHOP_DATA from "./Shop.data";
import Collectionpreview from "../../components/collectionpreview/Collectionpreview.component";
export default class Shoppage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...othercollections }) => (
          <Collectionpreview key={id} {...othercollections} />
        ))}
      </div>
    );
  }
}
