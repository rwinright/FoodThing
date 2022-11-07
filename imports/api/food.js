import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const Food = new Mongo.Collection('Food');

Food.schema = new SimpleSchema({
  title: { type: String },
  inventory: { type: Number },
  createdAt: { type: Date },
  note: { type: String, optional: true }
});

// Food.attachSchema(Food.schema);