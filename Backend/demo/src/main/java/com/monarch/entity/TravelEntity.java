package com.monarch.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

@Entity
@Data
@EqualsAndHashCode
@ToString
public class TravelEntity {
    private int id;

    private String state;

    private boolean national;

    private LocalDateTime start;

    private LocalDateTime end;
}
