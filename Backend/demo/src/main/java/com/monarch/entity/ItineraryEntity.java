package com.monarch.entity;

import jakarta.persistence.Entity;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

@Entity
@Data
@EqualsAndHashCode
@ToString
public class ItineraryEntity {

    private int id;

    private ActivityEntity activity;

    private ItineraryTravelEntity itineraryInfo;

    private double price;
}
