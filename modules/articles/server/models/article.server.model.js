'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  GeoJSON = require('mongoose-geojson-schema'),
  Schema = mongoose.Schema;

/**
 * Article Schema
 */
var ArticleSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  title: {
    type: String,
    default: '',
    trim: true,
    required: 'Title cannot be blank'
  },
  content: {
    type: String,
    default: '',
    trim: true
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  position: {
    latitude: Number,
    longitude: Number,
    cap: Number
  },
  classEvent: {
    type: String,
    required: 'L\'evento non può non avere una tipologia'
  }
});

mongoose.model('Article', ArticleSchema);