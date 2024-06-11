package com.graphql.example.graphql;

import lombok.Data;

@Data
public class InputProvider{

    private String name;
    private String category;
    private String description;
    private String direction;
    private String bankAccount;


    

    public InputProvider(String name, String category, String teacher, String description, String direction,
            String bankAccount) {
        this.name = name;
        this.category = category;
        this.description = description;
        this.direction = direction;
        this.bankAccount = bankAccount;
    }

    public InputProvider() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getDirection() {
        return direction;
    }

    public void setDirection(String direction) {
        this.direction = direction;
    }

    public String getBankAccount() {
        return bankAccount;
    }

    public void setBankAccount(String bankAccount) {
        this.bankAccount = bankAccount;
    }

}
