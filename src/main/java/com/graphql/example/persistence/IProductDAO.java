package com.graphql.example.persistence;


import org.springframework.data.repository.CrudRepository;

import com.graphql.example.entities.Product;

public interface IProductDAO extends CrudRepository<Product, Long> {
}
