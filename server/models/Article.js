const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  content: { type: [String], required: true },
  status: { type: Boolean, default: true },
}, { timestamps: true });

module.exports = mongoose.model('Article', articleSchema, 'Articles');