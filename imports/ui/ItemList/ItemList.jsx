import { withTracker } from 'meteor/react-meteor-data';
import { Food } from '../../api/food';

import React, { useEffect, useState } from 'react';
import ItemManagementModal from '../ItemManagementModal/ItemManagementModal';

const ItemList = ({ foodList }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalItemData, setModalItemData] = useState(null);
  const [foodListItems, setFoodListItems] = useState(foodList);
  //modal data

  const editItem = (food) => {
    setModalItemData(food);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const search = (value) => {
    //Debounce search
    return foodList.filter((food) => {
      return food.title.toLowerCase().includes(value.toLowerCase());
    });
  };

  //Set default values
  useEffect(() => {
    setFoodListItems(foodList);
  }, [foodList]);

  return <>
    {modalOpen && <ItemManagementModal data={modalItemData} closeModal={closeModal} />}
    <div className="ItemList">
      <h1>Item List</h1>
      <input type="text" className="search" placeholder="Search" onChange={(e) => setFoodListItems(search(e.target.value))} />
      {
        foodListItems.map((food) => (
          <div key={food._id} className="food-item">
            <div className="top-container">
              <div className="title-container">
                <span>{food.title}</span>
                <span>{food.inventory}</span>
              </div>
              <div className="button-container">
                <button className="edit-button" onClick={() => editItem(food)}>
                  Edit
                </button>
                <button className="delete-button">
                  Delete
                </button>
              </div>
            </div>
            <div className="note-section">
              <p>{food.note}</p>
            </div>
          </div>
        ))
      }
    </div>
  </>
}

export default withTracker(() => {
  return {
    foodList: Food.find({}).fetch().sort((a, b) => a.title.localeCompare(b.title)),
  };
})(ItemList);