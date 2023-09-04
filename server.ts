// server.ts
import express, { Request, Response } from 'express';
import driver from './neo4jConfig';
import createGraph from './graphVisualization';

const app = express();
const port = 3000;

// Endpoint pour obtenir des données de Neo4j et créer la visualisation
app.get('/', async (req: Request, res: Response) => {
    const session = driver.session();

    try {
        // Utilisez Neo4j pour obtenir les données nécessaires
        
        const data = await session.run("MATCH (a) OPTIONAL MATCH (a)-[r]->(b) RETURN a, r, b");
        console.log(data);
        
        // Créez la visualisation avec D3.js en utilisant les données
        const visualization = createGraph(data);

        res.json({ graph: visualization });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erreur lors de la récupération des données ou de la création de la visualisation' });
    } finally {
        session.close();
    }
});

app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
