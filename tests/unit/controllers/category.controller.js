const CategoryController = require('../../../controllers/category.cintroller');
const Model = require('../../../models');
const category = Model.category;
const newCatregory = require('../../mock-data/new-category.json')
const { mockRequest, mockResponse } = require('../interceptor');

let req, res;

beforeEach(() => {
    req = mockRequest();
    res = mockResponse();
})

describe('CategoryController.create', () => {
    
       beforeEach(() => {
        req.body = newCategory;
       })
    

    test('should call CategoryController.create and ends with an error', async () => {

        //Mocking model command
    const spy  = jest.spyOn(CategoryModel, 'create')
     .mockImplementation((newCatregory) => Promise.resolve(newCategory));
})
//executing controller command
await CategoryController.create(req, res);

//test to verify the create function
expect(spy).toHaveBeenCalled();
expect(CategoryModel.create).toHaveBeenCalledWith(newcategory);
expect(res.status).toHaveBeenCalledWith(201);
expect(res.send).toHaveBeenCalledWith(newCategory);

});

describe('CategoryController.findAll', () => {
    test('should call CategoryController.findAll with a query value', async () => {
    const queryParam ={
        whrere: {
            name: "Electronics"
        }
    };
     const spy = jest.spyOn(CategoryModel,'findAll').mockImplementaion((query))
     req.query = {
        name: "Electronic"
     }
     await CategoryController.findAll(req, res);

     expect(spy).toHaveBeenCalled();
     expect(CategoryModel.findAll).toHaveBeenCalledWith(queryParam);
     expect(res.status).toHaveBeenCalledWith(200);
     expect(res.send).toHaveBeenCalledWith(newCategory);

     })
     
    });
    



   