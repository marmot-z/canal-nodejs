const CanalConnectors = require('../canal-connectors');

let connector = CanalConnectors.newConnector();
connector.connect();
connector.subscribe('.*\..*');
connector.rollback();
