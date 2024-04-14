package com.monarch.entity;

import java.util.List;

import jakarta.persistence.Entity;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

@Entity
@Data
@EqualsAndHashCode
@ToString
public class TravelerEntity {

    private int id;

    private String name;

    private String mail;

    private List<DisabilityTravelerEntity> disabilityParents;

}
