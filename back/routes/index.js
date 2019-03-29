import express from 'express';
import connection from './conf';

connection.connect((err) => {
  if (err) {
    console.log('Error : ', err);
  } else {
    console.log('Connexion à la base de données... OK! PORT=3000');
  }
});

const router = express.Router();

// écoute de l'url "/api/infos"
router.get('/api/infos', (req, res) => {

  // connection à la base de données, et sélection des infos
  connection.query('SELECT * from infos', (err, results) => {

    if (err) {

      // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
      res.status(500).send('Erreur lors de la récupération des infos');
    } else {

      // Si tout s'est bien passé, on envoie le résultat de la requête SQL en tant que JSON.
      res.json(results);
    }
  });
});

//

router.get('/api/infos/:id', (req, res) => {

  // connection à la base de données, et sélection des infos
  const { id } = req.params;
  connection.query('SELECT * from infos WHERE id = ?', [id], (err, results) => {

    if (err) {

      // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
      res.status(500).send('Erreur lors de la récupération des infos');
    } else {

      // Si tout s'est bien passé, on envoie le résultat de la requête SQL en tant que JSON.
      res.json(results);
    }
  });
});

//moteur de recherche dans la navbar
router.get('/api/searchwine/:words', (req, res) => {
  const word = req.params.words.split(' ');
  const lengthWords = word.length;
  const requestSelectMatch = ['FROM (SELECT *'];
  const requestWhere = ['DESC) data WHERE'];
  let request = '';
  for (let i = 0; i < lengthWords; i += 1) {
    requestSelectMatch.push(`MATCH (name,photo,category,description,year,name_actors) AGAINST ('${word[i]}') as score${i}`);
    requestWhere.push(`score${i} > 0`);
  }
  requestSelectMatch.join(', ').substring(-2);
  request = `SELECT *, score0 ${requestSelectMatch} FROM wine ORDER BY score0 ${requestWhere.join(' AND ').replace('AND ', '')}`;
  connection.query(request, word, (err, results) => {
    if (err) {
      res.sendStatus(500).send('Erreur serveur lors de la recherche');
    } else {
      res.send(results);
    }
  });
});



// écoute de l'url "/api/infos"
router.get('/api/best', (req, res) => {

  // connection à la base de données, et sélection des infos
  connection.query('SELECT * FROM `infos` WHERE `id` <20', (err, results) => {

    if (err) {

      // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
      res.status(500).send('Erreur lors de la récupération des infos');
    } else {

      // Si tout s'est bien passé, on envoie le résultat de la requête SQL en tant que JSON.
      res.json(results);
    }
  });
});


//------------------------------------------------- POST METHOD ------------------------------------------------
//-------------------------------ROUTE EXPRESS-----------------------------------
// écoute de l'url "/consoles" avec le verbe POST


router.post('/api/infos', (req, res) => {

  // récupération des données envoyées
  const formData = req.body;

  // connexion à la base de données, et insertion d'une info
  connection.query('INSERT INTO infos SET ?', formData, (err, results) => {
    if (err) {
      // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
      console.log(err);
      res.status(500).send("Erreur lors de la sauvegarde d'une info");
    } else {
      // Si tout s'est bien passé, on envoie un statut "info enregistrée dans la base de données".
      console.log(results);
      res.sendStatus(200);
    }
  });
});


//------------------------------------------------- PUT METHOD ----------------------------------------------------
// écoute de l'url "/Enzo

/* router.put('/api/infos/:id', (request, response) => {
  const formData = request.body;
  const idinfos = request.body.id;
  connection.query('UPDATE infos SET ? WHERE id = ?', [formData, idinfos], error => {
    if (error) response.status(500).send('Cannot modify the infos...');
    else response.sendStatus(200);
  });
}); */

router.put('/api/infos/:id', (req, res) => {
  const { id } = req.params;
  connection.query('UPDATE infos SET ? WHERE id = ?', [req.body, id], (err) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.sendStatus(204);
    }
  });
});


//------------------------------------------------- DELETE METHOD -------------------------------------------------


//

router.delete('/api/infos/:id', (req, res) => {
  const { id } = req.params;
  connection.query('DELETE FROM infos WHERE id = ?', id, (err) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.sendStatus(204);
    }
  });
});

export default router;

