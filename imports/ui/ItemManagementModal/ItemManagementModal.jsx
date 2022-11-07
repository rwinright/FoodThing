import React, { useState } from 'react'

const ItemManagementModal = ({ data, closeModal }) => {
  const [itemData, setItemData] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(itemData);
    //Submit data to database
    Meteor.call('food.update', itemData);
    closeModal();
  };

  return (
    <div className="ItemManagementModal overlay">
      <div className="modal">
        <div className="button-container">
          <button className="edit-button" onClick={handleSubmit}>
            Submit
          </button>
          <button className="delete-button" onClick={closeModal}>
            X
          </button>
        </div>

        <div className="edit-fields">
          <div className="field">
            <label htmlFor="title">Title</label>
            <input type="text" name="" id="title-field" onChange={(e) => setItemData({ ...itemData, title: e.target.value })} value={itemData.title} />
          </div>
          <div className="field">
            <label htmlFor="title">Inventory</label>
            <input type="number" name="" id="inventory-field" onChange={(e) => setItemData({ ...itemData, inventory: e.target.value })} value={itemData.inventory} />
          </div>
          <div className="field">
            <label htmlFor="title">NOTES:</label>
            <input type="text" name="" id="note-field" onChange={(e) => setItemData({ ...itemData, note: e.target.value })} value={itemData.note} />
          </div>
        </div>
      </div>

    </div>
  )
}

export default ItemManagementModal