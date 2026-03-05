package com.harsha.aisentiment.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.harsha.aisentiment.service.StatsService;

@RestController
@RequestMapping("/api/stats")
@CrossOrigin
public class StatsController {

    @Autowired
    private StatsService statsService;

    @GetMapping
    public Map<String, Long> getStats(){

        return statsService.getStats();
    }
}