# 🍕 Slice Pizzeria - Documentation API

Bienvenue ! Cette API vous permet de récupérer des produits, de vous connecter, et de passer des commandes.  
Elle est disponible à l'adresse suivante (exemple) :  
👉 `http://192.168.X.X:3000` ou `https://xyz.ngrok.io`

---

## 🔑 Authentification

Certaines routes nécessitent d’être connecté. Pour cela, utilisez la route `/auth/login` et stockez le token reçu dans le `localStorage`.  
Ensuite, ajoutez ce token dans les en-têtes de vos requêtes protégées :

```
Authorization: Bearer VOTRE_TOKEN_ICI
```

---

## 📦 Endpoints disponibles

| Méthode | Route           | Description                               | Auth requise |
| ------: | --------------- | ----------------------------------------- | ------------ |
|    POST | `/auth/login`   | Connexion utilisateur, retourne un token  | ❌           |
|    POST | `/users`        | Création d’un utilisateur (inscription)   | ❌           |
|     GET | `/products`     | Liste des produits disponibles            | ❌           |
|     GET | `/products/:id` | Détails d’un produit                      | ❌           |
|     GET | `/categories`   | Liste des catégories de produits          | ❌           |
|     GET | `/orders`       | Liste des commandes de l'utilisateur      | ✅           |
|    POST | `/orders`       | Crée une commande avec plusieurs produits | ✅           |

---

## ✅ Exemple de requête : POST `/users`

Exemple du body de la requête `POST` pour inscrire un nouvel utilisateur.

```json
{
  "firstName": "toto",
  "lastName": "tutu",
  "email": "toto@example.com",
  "password": "secret123"
}
```

---

## ✅ Exemple de requête : POST `/auth/login`

Exemple du body de la requête `POST` pour authentifier un utilisateur déjà inscrit.

```json
{
  "email": "toto@example.com",
  "password": "secret123"
}
```

Réponse :

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5..."
}
```

---

## ✅ Exemple de requête : POST `/orders`

> ⚠️ Cette route nécessite d'être authentifié.

**Headers :**

```json
{
  "Authorization": "Bearer VOTRE_TOKEN_ICI",
  "Content-Type": "application/json"
}
```

**Corps de la requête :**

```json
{
  "products": [
    {
      "uuid": "3d684bbd-227a-45ff-b607-58eab1067598",
      "quantity": 2
    },
    {
      "uuid": "fff85a88-5296-43cd-9618-cacfb3a0324b",
      "quantity": 1
    }
  ]
}
```

**Réponse :**

```json
{
  "id": "a7f0ae4a-2316-4820-a322-e62e13bf5e2d",
  "created_at": "2025-04-06T14:55:30.205Z",
  "products": [
    {
      "quantity": 2,
      "product": {
        "id": "3d684bbd-227a-45ff-b607-58eab1067598",
        "name": "The Godfather Pizza",
        "price": 15
      }
    }
  ],
  "user": {
    "id": "f5a9484d-ca51-4ce3-a5c1-41b9bb637064",
    "email": "toto@example.com"
  }
}
```

---

## 🔐 Exemple d'appel JS avec `fetch()`

```js
fetch('http://localhost:3000/orders', {
  method: 'POST',
  headers: {
    Authorization: 'Bearer VOTRE_TOKEN_ICI',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    products: [
      { uuid: '3d684bbd-227a-45ff-b607-58eab1067598', quantity: 2 },
      { uuid: 'fff85a88-5296-43cd-9618-cacfb3a0324b', quantity: 1 },
    ],
  }),
})
  .then((res) => res.json())
  .then((data) => console.log(data));
```

---

> 🧑‍🍳 Bon courage pour l’intégration !
