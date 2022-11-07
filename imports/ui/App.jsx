import React, { useState } from 'react';
import ItemList from './ItemList/ItemList';

export const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <ItemList />
    </div>
  );
}