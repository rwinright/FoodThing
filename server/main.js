import { Meteor } from 'meteor/meteor';
import { Food } from '/imports/api/food';

const insertItem = ({ title, inventory, note }) => Food.insert({ title, inventory, note: '', createdAt: new Date() });

const deleteItem = ({ _id }) => Food.remove(_id);

const updateItem = ({ _id, title, inventory, note }) => Food.update(_id, { $set: { title, inventory, note } });

Meteor.methods({
  'food.insert': insertItem,
  'food.delete': deleteItem,
  'food.update': updateItem
});

Meteor.startup(() => {
  //Seed the database if it's empty for testing purposes

  if (Food.find().count() === 0) {
    [
      {
        title: 'Apple',
        inventory: 1,
        note: '',
        createdAt: new Date(),
      }, {
        title: 'Banana',
        inventory: 1,
        note: '',
        createdAt: new Date(),
      }, {
        title: 'Orange',
        inventory: 1,
        note: '',
        createdAt: new Date(),
      }
    ].forEach(insertItem);
  }

  //Add single item to the database

  console.log(Food.find().fetch());

  // erase database
  // Food.remove({});
});
