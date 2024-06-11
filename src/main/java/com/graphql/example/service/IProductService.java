package com.graphql.example.service;

import com.graphql.example.entities.Product;

import java.util.List;

public interface IProductService {

    Product findById(Long id);

    List<Product> findAll();

    void createStudent(Product student);

    void deleteById(Long id);
}
