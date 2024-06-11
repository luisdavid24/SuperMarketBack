package com.graphql.example.service.implementation;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.graphql.example.entities.Product;
import com.graphql.example.persistence.IProductDAO;
import com.graphql.example.service.IProductService;


@Service
public class ProductServiceImpl implements IProductService {

    @Autowired
    private IProductDAO productDAO;

    @Override
    @Transactional(readOnly = true)
    public Product findById(Long id) {
        return productDAO.findById(id).orElseThrow(); 
    }

    @Override
    @Transactional(readOnly = true)
    public List<Product> findAll() {
        return (List<Product>) productDAO.findAll();
    }

    @Override
    public void createStudent(Product student) {
        productDAO.save(student);
    }

    @Override
    public void deleteById(Long id) {
        productDAO.deleteById(id);
    }

    
}
