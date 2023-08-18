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
    
    //CRUD => Create
    addCategory(name) {
        const id = this.nextCategoryID;
        this.nextCategoryID++;

        const category = new Category(id, name);
        this.categories.push(category);
    }

    //R => Read

    getCategoryById(id) {
        return this.categories.find((category) => category.id == id)
    }

    // U => Update

    updateCategory(id, name) {
        const category = this.getCategoryById(id);
        category.name = name;
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
        category.products.push(product);
    }
}

const categoriesList = new CategoryServices();
const productsList = new ProductService();

function createCategory() {
    const categoryName1 = "Candies";

    categoriesList.addCategory(categoryName1);
    
    console.log(categoriesList.categories);
}

function createProduct() {
    const productName = "Choco";
    const productsPrices = 0.50;
    const productCategory = categoriesList.categories[0];

    productsList.addProduct(productName, productsPrices, productCategory)

    console.log(productsList.products);
}

function findCategory(id) {
    const category = categoriesList.getCategoryById(id);

    console.log(category)
}

function editCategory(id, name) {
    categoriesList.updateCategory(id, name);

    console.log(categoriesList.categories);
}