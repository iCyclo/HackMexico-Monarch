package com.monarch.entity;

import jakarta.persistence.Entity;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

@Entity
@Data
@EqualsAndHashCode
@ToString
public class ItineraryTravelEntity {

    private int id;

    private TravelerEntity traveler;

    private TravelEntity travel;

}
