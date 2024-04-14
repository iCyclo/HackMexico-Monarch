package com.monarch.entity;

import jakarta.persistence.Entity;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

@Entity
@Data
@EqualsAndHashCode
@ToString
public class DisabilityTravelerEntity {

    private int id;

    private DisabilityEntity disability;

    private TravelerEntity traveler;

}
