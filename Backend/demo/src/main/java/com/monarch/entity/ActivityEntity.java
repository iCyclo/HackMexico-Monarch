package com.monarch.entity;

import jakarta.persistence.Entity;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

@Entity
@Data
@EqualsAndHashCode
@ToString
public class ActivityEntity {

    private int id;

    private String name;

    private double price;

    private String description;

    private int duration;

    private String state;

}
