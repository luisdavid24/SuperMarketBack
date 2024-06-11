package com.graphql.example.service.implementation;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

import com.graphql.example.entities.Provider;
import com.graphql.example.persistence.IProviderDAO;
import com.graphql.example.service.IProviderService;

@Service
public class ProviderServiceImpl implements IProviderService {

    @Autowired
    private IProviderDAO providerDAO;

    @Override
    @Transactional(readOnly = true)
    public Provider findById(Long id) {
        return providerDAO.findById(id).orElseThrow();
    }

    @Override
    @Transactional(readOnly = true)
    public List<Provider> findAll() {
        return (List<Provider>) providerDAO.findAll();
    }

    @Override
    public void createProvider(Provider provider) {
        providerDAO.save(provider);
    }

    @Override
    public void deleteById(Long id) {
        providerDAO.deleteById(id);
    }

    

    

}
