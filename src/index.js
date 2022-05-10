'use strict';

require("./index.less");

const {Elm} = require('./Main');

Elm.Main.init({
  flags: {
    elasticsearchMappingSchemaVersion: parseInt(process.env.ELASTICSEARCH_MAPPING_SCHEMA_VERSION) || 0,
    elasticsearchUrl: process.env.ELASTICSEARCH_URL || 'http://localhost:9200',
    elasticsearchUsername : process.env.ELASTICSEARCH_USERNAME || 'z3ZFJ6y2mR',
    elasticsearchPassword : process.env.ELASTICSEARCH_PASSWORD || 'ds8CEvALPf9pui7XG'
  }
});
