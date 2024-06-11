package com.graphql.example.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import com.graphql.example.entities.Product;
import com.graphql.example.entities.Provider;
import com.graphql.example.graphql.InputProduct;
import com.graphql.example.service.IProductService;
import com.graphql.example.service.IProviderService;

@Controller
public class GraphQLProductController {

    @Autowired
    private IProductService productService;

    @Autowired
    private IProviderService providerService;

    @QueryMapping(name = "findProductById")
    public Product findById(@Argument(name = "ProductId") String id){
        Long ProductId = Long.parseLong(id);

        return productService.findById(ProductId);
    }

    @QueryMapping(name = "findAllProducts")
    public List<Product> findAll(){
        return productService.findAll();
    }

    @MutationMapping(name = "createProduct")
    public Product createProduct(@Argument InputProduct inputProduct){

        Provider provider = providerService.findById(Long.parseLong(inputProduct.getProviderId()));

        Product product = new Product();
        product.setName(inputProduct.getName());
        product.setBrand(inputProduct.getBrand());
        product.setBuyingPrice(inputProduct.getBuyingPrice());
        product.setSalePrice(inputProduct.getSalePrice());
        product.setCategory(inputProduct.getCategory());
        product.setProvider(provider);

        productService.createStudent(product);

        return product;
    }

    @MutationMapping(name = "deleteProductById")
    public String deleteById(@Argument(name = "ProductId") String id){
        productService.deleteById(Long.parseLong(id));
        return "El estudiante con id " + id + " ha sido eliminado.";
    }
}
