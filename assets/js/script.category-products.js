//Cada Categoria possuivários produtos
//Cada Produto pretence a uma catregoria

class Category {
    constructor(id, name){
        this.id = id;
        this.name = name;
        this.products = [];
    }
}

class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }
}

class CategoryServices {
    constructor() {
        this.categories = [];
        this.nextCategoryID = 1;
    }

    addCategory(name) {
        const id = this.nextCategoryID;
        this.nextCategoryID++;

        const category = new Category(id, name);
        this.categories.push(category);
    }
}

class ProductService {
    constructor() {
        this.products = [];
        this.nextProductId = 1;
    }

    addProduct(name, price, category) {
        const id = this.nextProductId;
        this.nextProductId++;

        const product = new Product(id, name, price, category);
        this.products.push(product);

    }
}

const categoriesList = new CategoryServices();

function createCategory() {
    const categoryName = "Candies";

    categoriesList.addCategory(categoryName);

    console.log(categoriesList.categories);
}