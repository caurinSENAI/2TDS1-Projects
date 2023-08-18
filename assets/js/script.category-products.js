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
        this.categorys = [];
        this.nextCategoryID = 1;
    }

    addCategory(name) {
        const id = this.nextCategoryID;
        this.nextCategoryID++;

        const category = new Category(id, name);
        this.categorys.push(category);
    }
}

const categorysList = new CategoryServices();

function createCategory() {

}