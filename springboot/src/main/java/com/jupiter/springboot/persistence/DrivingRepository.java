package com.jupiter.springboot.persistence;

import com.jupiter.springboot.domain.Driving;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DrivingRepository extends JpaRepository<Driving, Long> {

    List<Driving> findByPlateAndYearAndMonthAndDay(String plate, String year, String month, String day);

    List<Driving> findByPlateLikeAndYearAndMonthAndDay(String plate, String year, String month, String day);

    List<Driving> findByYearAndMonthAndDay(String year, String month, String day);

    List<Driving> findByYearAndMonthAndDayAndSuddenAccGreaterThanEqual(String year, String month, String day, int acc);

    List<Driving> findByPlateLikeAndYearAndMonthAndDayAndSuddenAccGreaterThanEqual(String plate, String year, String month, String day, int acc);

    List<Driving> findByYearAndMonthAndDayAndSuddenAccGreaterThanEqualOrSuddenDepartureGreaterThanEqual(String year, String month, String day, int acc, int dep);



}
