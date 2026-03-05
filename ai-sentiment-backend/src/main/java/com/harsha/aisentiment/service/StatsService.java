package com.harsha.aisentiment.service;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.harsha.aisentiment.repository.FeedbackRepository;

@Service
public class StatsService {

    @Autowired
    private FeedbackRepository repository;

    public Map<String, Long> getStats(){

        long positive = repository.countBySentiment("Positive");
        long negative = repository.countBySentiment("Negative");
        long neutral = repository.countBySentiment("Neutral");

        Map<String, Long> stats = new HashMap<>();

        stats.put("positive", positive);
        stats.put("negative", negative);
        stats.put("neutral", neutral);

        return stats;
    }
}