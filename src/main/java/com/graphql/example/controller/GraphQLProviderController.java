package com.graphql.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import com.graphql.example.entities.Provider;
import com.graphql.example.graphql.InputProvider;
import com.graphql.example.service.IProviderService;

@Controller
public class GraphQLProviderController {

    @Autowired
    private IProviderService providerService;

    @QueryMapping(name = "findProviderById")
    public Provider findById(@Argument(name = "providerId") String id){
        Long courseId = Long.parseLong(id);

        return providerService.findById(courseId);
    }

    @QueryMapping(name = "findAllProvider")
    public List<com.graphql.example.entities.Provider> findAll(){
        return providerService.findAll();
    }


    @MutationMapping
    public Provider createProvider(@Argument InputProvider inputProvider){

        Provider provider = new Provider();
        provider.setName(inputProvider.getName());
        provider.setCategory(inputProvider.getCategory());
        provider.setDescription(inputProvider.getDescription());
        provider.setBankAccount(inputProvider.getBankAccount());
        provider.setDirection(inputProvider.getDirection());
        
        providerService.createProvider(provider);
        return provider;
    }


    @MutationMapping(name = "deleteProviderById")
    public String deleteById(@Argument(name = "courseId") String id){

        providerService.deleteById(Long.parseLong(id));

        return "El curso con id " + id + " ha sido eliminado";
    }
}
