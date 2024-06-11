package com.graphql.example.persistence;

import org.springframework.data.repository.CrudRepository;

import com.graphql.example.entities.Provider;


public interface IProviderDAO extends CrudRepository<Provider, Long> {
}
