type Pizza = {
    id: string,
    name: string,
    description: string,
    price: number
}

const PIZZE: Pizza[] = [
    {
        id: "655d-462a-95d2",
        name: "The Godfather Pizza",
        description: "Gourmet Italian sausage, fresh garlic, onions & our hot giardiniera.",
        price: 15.99
    },
    {
        "id": "da8e-9f48-eac6",
        "name": "The Veggie Pizza",
        "description": "Vegetarian. Mushrooms, onions & green peppers with tomatoes on top.",
        "price": 13.99
    },
    {
        "id": "b48e-4f29-a6eb",
        "name": " White Pizza",
        "description": "Vegetarian. Olive oil, fresh garlic & sauteed spinach with tomatoes on top (no pizza sauce).",
        "price": 12.99
    },
    {
        "id": "8566-40c0-b584",
        "name": "The Hawaiian Pizza",
        "description": "A blend of our special pizza & BBQ sauces, topped with Australian bacon, and pineapple.",
        "price": 17.99
    },
    {
        "id": "9f7b-4d13-8d4a",
        "name": "Meat Mania Pizza",
        "description": "Gourmet Italian sausage, meatballs & pepperoni with turkey bacon on top.",
        "price": 21.99
    },
    {
        "id": "1e5c-496d-8ace",
        "name": "Fabulous Four Pizza",
        "description": "Gourmet Italian sausage, mushrooms, onions & green peppers.",
        "price": 17.99
    }
]

export {
    Pizza,
    PIZZE
}
