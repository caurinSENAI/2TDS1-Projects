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

//D => Delete

    deleteCategory(id) {
        const category = this.getCategoryById(id);
        const index = this.categories.indexOf(category);

        this.categories.splice(index, 1);
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

    //R => Read

    getProductById(id) {
        return this.products.find((product) => product.id == id);
    }
}

const categoriesList = new CategoryServices();
const productsList = new ProductService();

function createCategory() {
    const categoryName = document.getElementById("categoryInput").value;
    
    categoriesList.addCategory(categoryName);
    displayCategories();
    clearFields();
    console.log(categoriesList.categories);
}

function createProduct() {
    const productName1 = "Choco";
    const productsPrices1 = 0.50;
    const productCategory1 = categoriesList.categories[0];
    
    const productName2 = "Sneakers";
    const productsPrices2 = 100;
    const productCategory2 = categoriesList.categories[1];

    const productName3 = "Harry Potter";
    const productsPrices3 = 50;
    const productCategory3 = categoriesList.categories[2];
    

    productsList.addProduct(productName1, productsPrices1, productCategory1)
    productsList.addProduct(productName2, productsPrices2, productCategory2)
    productsList.addProduct(productName3, productsPrices3, productCategory3)

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

function deleteCategory(id) {
    categoriesList.deleteCategory(id);

    console.log(categoriesList.categories);
}




function findProduct(id) {
    const product = productsList.getProductById(id);

    console.log(product)
}

function displayCategories() {
    let content = '';
    categoriesList.categories.forEach(category => {
        content += `<li>${category.name}</li>`
    });

    document.getElementById("categoriesList").innerHTML = content;
}

function clearFields() {
    document.getElementById("categoryInput").value = "";
}