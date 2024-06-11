package com.graphql.example.service;

import java.util.List;

import com.graphql.example.entities.Provider;


public interface IProviderService {

    Provider findById(Long id);

    List<Provider> findAll();

    void createProvider(Provider provider);

    void deleteById(Long id);
}
