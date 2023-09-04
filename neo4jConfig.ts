// neo4jConfig.ts
import neo4j from 'neo4j-driver';

const neo4jConfig = {
    uri: 'neo4j+s://5b0b9362.databases.neo4j.io',
    user: 'neo4j',
    password: 'LEApb9u0oyY4zCw14Te_bRJjhec6pnFIhYJbRz9yKHk',
};

const driver = neo4j.driver(neo4jConfig.uri, neo4j.auth.basic(neo4jConfig.user, neo4jConfig.password));

export default driver;
